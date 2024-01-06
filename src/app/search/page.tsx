import PostList from "@/components/posts/PostList";
import { getPostByTerm } from "@/db/queries/posts";
import { redirect } from "next/navigation";

const Search = async ({ searchParams }: { searchParams: { term: string } }) => {
  const term = searchParams.term;
  if (!term || typeof term !== "string") {
    redirect("/");
  }

  return (
    <div>
      <PostList fetchData={() => getPostByTerm(term)} />
    </div>
  );
};
export default Search;
