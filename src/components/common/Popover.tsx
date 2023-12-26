import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { ReactNode } from "react";
interface PopoverProps {
  trigger: string;
  children: ReactNode;
}
const PopoverWrapper = ({ trigger, children }: PopoverProps) => {
  return (
    <Popover backdrop="blur" placement="left-end">
      <PopoverTrigger>
        <Button color="primary" variant="flat">
          {trigger}
        </Button>
      </PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  );
};
export default PopoverWrapper;
