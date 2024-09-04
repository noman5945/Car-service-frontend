import { Label, Textarea } from "flowbite-react";
type TextAreaProps = {
  title: string;
  id: string;
  placeholder: string;
  onChangeFunc: React.Dispatch<React.SetStateAction<string>>;
  rows?: number;
  cols?: number;
};
export const CustomTextArea = ({
  title,
  id,
  placeholder,
  onChangeFunc,
  rows,
  cols,
}: TextAreaProps) => {
  return (
    <div className="max-w-xl">
      <div className="mb-2 block">
        <Label htmlFor={id} value={title} />
      </div>
      <Textarea
        id={id}
        placeholder={placeholder}
        required
        rows={rows ? rows : 4}
        cols={cols ? cols : 100}
        onChange={(e) => onChangeFunc(e.target.value)}
      />
    </div>
  );
};
