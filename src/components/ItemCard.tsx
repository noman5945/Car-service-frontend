import defaultpic from "../assets/HeroSection-Carwash-cover1.jpg";
import { CustomButton } from "./CustomButton";

type ItemCardProps = {
  title: string;
  desc: string;
  onItemClickFunc?: React.MouseEventHandler;
  img?: string;
};
export const ItemCard = ({
  title,
  desc,
  onItemClickFunc,
  img,
}: ItemCardProps) => {
  return (
    <div className=" flex flex-col shadow-md rounded-md">
      <img
        src={img ? img : defaultpic}
        className=" w-[300px] h-[200px] lg:w-[400px] lg:h-[300px] rounded-md"
      />
      <div className=" block p-3">
        <h2 className=" text-lg font-bold">{title}</h2>
        <p className=" text-base font-light">{desc}</p>
        <CustomButton
          title="Details"
          styles="w-[100px] h-[40px]"
          onClickFunc={onItemClickFunc}
        />
      </div>
    </div>
  );
};
