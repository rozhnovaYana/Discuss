import Link from "next/link";
import PostShow from "@/components/posts/PostShow";
import CommentCreateForm from "@/components/comments/CommentCreateForm";
import paths from "@/paths";
import { getCommentsById } from "@/db/queries/comments";
import CommentList from "@/components/comments/CommentList";
import { Suspense } from "react";
import SkeletonLoading from "@/components/posts/Skeleton";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;
  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topic(slug)}>
        {"< "}Back to {slug}
      </Link>
      <Suspense fallback={<SkeletonLoading />}>
        <PostShow postId={postId} />
      </Suspense>
      <CommentCreateForm postId={postId} startOpen />
      <CommentList fetchData={() => getCommentsById(postId)} />
    </div>
  );
}
