import { Label, Textarea } from "flowbite-react";
type TextAreaProps = {
  title: string;
  id: string;
  placeholder: string;
  onChangeFunc: React.Dispatch<React.SetStateAction<string>>;
};
export const CustomTextArea = ({
  title,
  id,
  placeholder,
  onChangeFunc,
}: TextAreaProps) => {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor={id} value={title} />
      </div>
      <Textarea
        id={id}
        placeholder={placeholder}
        required
        rows={4}
        onChange={(e) => onChangeFunc(e.target.value)}
      />
    </div>
  );
};
