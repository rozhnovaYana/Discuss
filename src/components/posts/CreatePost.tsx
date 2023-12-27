"use client";
import PopoverWrapper from "../common/Popover";
import FormWrapper from "../common/FormWrapper";
import { Input, Textarea } from "@nextui-org/react";
import { useFormState } from "react-dom";
import { createPost } from "@/actions";

const CreatePost = ({ slug }: { slug: string }) => {
  const [state, action] = useFormState(createPost.bind(null, slug), {
    errors: {},
  });

  return (
    <PopoverWrapper trigger="Create a post">
      <FormWrapper formAction={action} title="Create a post">
        <Input
          name="title"
          label="Title"
          placeholder="Title"
          labelPlacement="outside"
          isInvalid={!!state?.errors?.title}
          errorMessage={state?.errors?.title?.join(", ")}
        />
        <Textarea
          name="content"
          label="Content"
          placeholder="Content"
          labelPlacement="outside"
          isInvalid={!!state?.errors?.content}
          errorMessage={state?.errors?.content?.join(", ")}
        />
        {state?.errors?._form && (
          <div className="p-2 rounded bg-red-200">{state.errors._form}</div>
        )}
      </FormWrapper>
    </PopoverWrapper>
  );
};
export default CreatePost;
