import CreateTopic from "@/components/topics/CreateTopic";

const Home = () => {
  return (
    <div className="grid grid-cols-5 gap-4 px-6">
      <div className="col-span-4">
        <h2 className="font-bold">Topics</h2>
      </div>
      <div>
        <CreateTopic />
      </div>
    </div>
  );
};
export default Home;
