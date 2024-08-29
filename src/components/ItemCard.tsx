import defaultpic from "../assets/HeroSection-Carwash-cover1.jpg";
import { CustomButton } from "./CustomButton";

type ItemCardProps = {
  title: string;
  desc: string;
  onItemClickFunc?: React.MouseEventHandler;
};
export const ItemCard = ({ title, desc, onItemClickFunc }: ItemCardProps) => {
  return (
    <div className=" flex flex-col shadow-md rounded-md">
      <img
        src={defaultpic}
        className=" w-[250px] h-[200px] lg:w-[350px] lg:h-[300px] rounded-md"
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
