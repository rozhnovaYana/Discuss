import { db } from "..";
export type PostItem = Awaited<ReturnType<typeof getTopicPosts>>[number];
export const getTopicPosts = (slug: string) => {
  return db.post.findMany({
    where: {
      topic: { slug },
    },
    include: {
      user: {
        select: { name: true },
      },
      topic: {
        select: { slug: true },
      },
      _count: {
        select: {
          comments: true,
        },
      },
    },
  });
};
