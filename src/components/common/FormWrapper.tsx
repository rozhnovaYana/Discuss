import { ReactNode } from "react";
import FormButton from "../common/FormButton";

interface FormWrapperProps {
  formAction: (payload: FormData) => void;
  children: ReactNode;
  title: string;
}
const FormWrapper = ({ formAction, children, title }: FormWrapperProps) => {
  return (
    <form action={formAction}>
      <div className="flex flex-col gap-4 p-4 w-80">
        <h3 className="font-bold">{title}</h3>
        {children}
        <FormButton>Submit</FormButton>
      </div>
    </form>
  );
};
export default FormWrapper;
