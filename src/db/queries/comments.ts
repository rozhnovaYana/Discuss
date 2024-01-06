import { db } from "..";
export type CommentsWithAuthor = Awaited<
  ReturnType<typeof getCommentsById>
>[number];

export const getCommentsById = (postId: string) => {
  return db.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
};
