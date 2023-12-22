"use server";

import { auth } from "@/auth";
import { z } from "zod";

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
  return {
    errors: {},
  };
};
