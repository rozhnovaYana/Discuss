"use client";
import { createTopic } from "@/actions";
import { Input, Textarea } from "@nextui-org/react";
import { useFormState } from "react-dom";
import PopoverWrapper from "../common/Popover";
import FormWrapper from "../common/FormWrapper";

const CreateTopic = () => {
  const [state, formAction] = useFormState(createTopic, {
    errors: {},
  });

  return (
    <PopoverWrapper trigger="Create a Topic">
      <FormWrapper formAction={formAction} title="Create a Topic">
        <Input
          name="name"
          label="Name"
          placeholder="Name"
          labelPlacement="outside"
          isInvalid={!!state.errors?.name}
          errorMessage={state.errors?.name?.join(", ")}
        />
        <Textarea
          name="description"
          label="Description"
          placeholder="Description"
          labelPlacement="outside"
          isInvalid={!!state.errors?.description}
          errorMessage={state.errors?.description?.join(", ")}
        />
        {state.errors?._form && (
          <div className="p-2 rounded bg-red-200">{state.errors._form}</div>
        )}
      </FormWrapper>
    </PopoverWrapper>
  );
};
export default CreateTopic;
