import CreateTopic from "@/components/topics/CreateTopic";
import TopicsList from "@/components/topics/TopicsList";
import { Divider } from "@nextui-org/react";

const Home = () => {
  return (
    <div className="grid grid-cols-5 gap-4 px-6">
      <div className="col-span-4">
        <h2 className="font-bold">Topics</h2>
      </div>
      <div>
        <CreateTopic />
        <Divider className="my-4"/>
        <TopicsList />
      </div>
    </div>
  );
};
export default Home;
