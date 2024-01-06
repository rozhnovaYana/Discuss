"use client";
import { search } from "@/actions";
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const SearchInput = () => {
  const params = useSearchParams();
  const term = params.get("term");
  return (
    <form action={search}>
      <Input name="term" defaultValue={term || ""} />
    </form>
  );
};
export default SearchInput;
