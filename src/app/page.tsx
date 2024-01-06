import PostList from "@/components/posts/PostList";
import CreateTopic from "@/components/topics/CreateTopic";
import TopicsList from "@/components/topics/TopicsList";
import { getTopPosts } from "@/db/queries/posts";
import { Divider } from "@nextui-org/react";

const Home = ({ searchParams }: { searchParams: { tertm: string } }) => {
  console.log(searchParams);
  return (
    <div className="grid grid-cols-5 gap-4 px-6">
      <div className="col-span-4">
        <h2 className="font-bold">Top posts</h2>
        <PostList fetchData={getTopPosts} />
      </div>
      <div>
        <CreateTopic />
        <Divider className="my-4" />
        <TopicsList />
      </div>
    </div>
  );
};
export default Home;
