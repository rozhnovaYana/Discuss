import { db } from "@/db";
import paths from "@/paths";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

const TopicsList = async () => {
  const topics = await db.topic.findMany();
  return (
    <div className="border py-3 px-2">
      <h3 className="mb-2 text-xl">Topics</h3>
      <div className="flex flex-wrap flex-row gap-2">
        {topics.map((topic) => (
          <div key={topic.id}>
            <Link href={paths.topic(topic.slug)}>
              <Chip
                className="p-2 whitespace-normal h-max	"
                variant="shadow"
                color="primary"
              >
                {topic.slug}
              </Chip>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopicsList;
