import { FloatingLabel } from "flowbite-react";

type CustomInputProps = {
  textType: string;
  inputLabel: string;
  onChangeFunc: React.Dispatch<React.SetStateAction<string>>;
  styles?: string;
};

export const InputText = ({
  textType,
  inputLabel,
  onChangeFunc,
  styles,
}: CustomInputProps) => {
  return (
    <div className={styles ? styles : "w-full"}>
      <FloatingLabel
        variant="outlined"
        label={inputLabel ? inputLabel : "Examlpe Label"}
        onChange={(e) => onChangeFunc(e.target.value)}
        type={textType ? textType : "text"}
      ></FloatingLabel>
    </div>
  );
};
