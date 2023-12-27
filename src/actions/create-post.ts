"use server";

import { z } from "zod";
import { auth } from "@/auth";
import { Post } from "@prisma/client";
import paths from "@/paths";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
const schema = z.object({
  title: z.string().min(3),
  content: z.string().min(3),
});
interface CreatePostState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string;
  };
}
export const createPost = async (
  slug: string,
  prevState: CreatePostState,
  formData: FormData
): Promise<CreatePostState> => {
  const validationFields = schema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
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

  let post: Post;
  try {
    const topic = await db.topic.findUnique({
      where: { slug },
    });
    if (!topic) {
      return {
        errors: {
          _form: "The Topic is not found",
        },
      };
    }

    post = await db.post.create({
      data: {
        title: validationFields.data.title,
        content: validationFields.data.content,
        userId: session.user.id,
        topicId: topic.id,
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
  revalidatePath(paths.topic(slug));
  redirect(paths.post(post.id, slug));
};
