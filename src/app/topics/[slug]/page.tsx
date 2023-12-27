import CreatePost from "@/components/posts/CreatePost";

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
      </div>
      <CreatePost slug={slug} />
    </div>
  );
};
export default Topic;
