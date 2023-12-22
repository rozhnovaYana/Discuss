"use server";
import type { Topic } from "@prisma/client";
import { auth } from "@/auth";
import { z } from "zod";
import { db } from "@/db";
import paths from "@/paths";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const schema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-zA-Z\s\-]*$/),
  description: z.string().min(10),
});
interface CreateTopicState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string;
  };
}
export const createTopic = async (
  prevState: CreateTopicState,
  formData: FormData
): Promise<CreateTopicState> => {
  const validationFields = schema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!validationFields.success) {
    return {
      errors: validationFields.error.flatten().fieldErrors,
    };
  }
  const session = await auth();
  if (!session || !session?.user) {
    return {
      errors: {
        _form: "You need to sign in to do this",
      },
    };
  }
  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: validationFields.data.name,
        description: validationFields.data.description,
      },
    });
  } catch (err: unknown) {
    const issue = err instanceof Error ? err.message : "Something went wrong";
    return {
      errors: {
        _form: issue,
      },
    };
  }
  revalidatePath("/");
  redirect(paths.topic(topic.slug));
};
