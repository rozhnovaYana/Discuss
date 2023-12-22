import { createTopic } from "@/actions";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";

const CreateTopic = () => {
  return (
    <Popover backdrop="blur" placement="left-end">
      <PopoverTrigger>
        <Button color="primary" variant="flat">
          Create a Topic
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={createTopic}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="font-bold">Create a Topic</h3>
            <Input label="Name" placeholder="Name" labelPlacement="outside" />
            <Textarea
              label="Description"
              placeholder="Description"
              labelPlacement="outside"
            />
            <Button color="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};
export default CreateTopic;
