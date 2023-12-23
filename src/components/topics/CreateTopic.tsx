"use client";
import { createTopic } from "@/actions";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import { useFormState } from "react-dom";
import FormButton from "../common/FormButton";

const CreateTopic = () => {
  const [state, formAction] = useFormState(createTopic, {
    errors: {},
  });

  return (
    <Popover backdrop="blur" placement="left-end">
      <PopoverTrigger>
        <Button color="primary" variant="flat">
          Create a Topic
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={formAction}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="font-bold">Create a Topic</h3>
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
            <FormButton>Submit</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};
export default CreateTopic;
