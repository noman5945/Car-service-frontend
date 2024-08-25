import { Label, Textarea } from "flowbite-react";
type TextAreaProps = {
  title: string;
  id: string;
  placeholder: string;
};
export const CustomTextArea = ({ title, id, placeholder }: TextAreaProps) => {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor={id} value={title} />
      </div>
      <Textarea id={id} placeholder={placeholder} required rows={4} />
    </div>
  );
};
