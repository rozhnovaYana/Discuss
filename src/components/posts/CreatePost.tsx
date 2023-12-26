"use client";
import PopoverWrapper from "../common/Popover";
import FormWrapper from "../common/FormWrapper";
import { Input } from "@nextui-org/react";
import { useFormState } from "react-dom";
import { createPost } from "@/actions";

const CreatePost = () => {
  const [state, action] = useFormState(createPost, { errors: {} });
  return (
    <PopoverWrapper trigger="Create a post">
      <FormWrapper formAction={action} title="Create a post">
        <Input
          name="title"
          label="Title"
          placeholder="Title"
          labelPlacement="outside"
        />
        <Input
          name="content"
          label="Content"
          placeholder="Content"
          labelPlacement="outside"
        />
      </FormWrapper>
    </PopoverWrapper>
  );
};
export default CreatePost;
