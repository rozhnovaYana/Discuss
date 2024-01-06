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

export const getTopPosts = () => {
  return db.post.findMany({
    orderBy: {
      comments: {
        _count: "desc",
      },
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
    take: 5,
  });
};
export const getPostByTerm = (term: string) => {
  return db.post.findMany({
    where: {
      OR: [{ content: { contains: term } }, { title: { contains: term } }],
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
