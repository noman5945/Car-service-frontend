import { Button } from "flowbite-react";
type CustomProps = {
  styles: string;
  textStyle?: string;
  title: string;
  onClickFunc?: React.MouseEventHandler;
};

export const CustomButton = ({
  styles,
  textStyle,
  onClickFunc,
  title,
}: CustomProps) => {
  return (
    <Button
      className={`text-center rounded-sm ` + styles}
      onClick={onClickFunc ? onClickFunc : () => {}}
    >
      <p className={`font-bold ` + textStyle}> {title} </p>
    </Button>
  );
};
