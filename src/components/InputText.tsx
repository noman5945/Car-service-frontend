import { FloatingLabel } from "flowbite-react";

type CustomInputProps = {
  textType: string;
  inputLabel: string;
  onChangeFunc: React.Dispatch<React.SetStateAction<string>>;
};

export const InputText = ({
  textType,
  inputLabel,
  onChangeFunc,
}: CustomInputProps) => {
  return (
    <div className="grid grid-flow-col justify-stretch space-x-1">
      <FloatingLabel
        variant="outlined"
        label={inputLabel ? inputLabel : "Examlpe Label"}
        onChange={(e) => onChangeFunc(e.target.value)}
        type={textType ? textType : "text"}
      ></FloatingLabel>
    </div>
  );
};
