import CreatePost from "@/components/posts/CreatePost";
import PostList from "@/components/posts/post-list";
import { getTopicPosts } from "@/db/queries/posts";

interface TopicProps {
  params: {
    slug: string;
  };
}
const Topic = ({ params }: TopicProps) => {
  const { slug } = params;
  return (
    <div className="grid grid-cols-5 gap-4 px-6">
      <div className="col-span-4">
        <h2 className="font-bold text-xl">{slug}</h2>
        <PostList fetchData={() => getTopicPosts(slug)} />
      </div>
      <CreatePost slug={slug} />
    </div>
  );
};
export default Topic;
