"use client";

import { Button } from "@nextui-org/react";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

const FormButton = ({ children }: { children: ReactNode }) => {
  const { pending } = useFormStatus();
  return (
    <Button color="primary" type="submit" isLoading={pending}>
      {!pending && children}
    </Button>
  );
};
export default FormButton;
