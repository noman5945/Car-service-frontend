import defaultpic from "../assets/HeroSection-Carwash-cover1.jpg";
import { CustomButton } from "./CustomButton";
export const ItemCard = () => {
  return (
    <div className=" flex flex-col shadow-md rounded-md">
      <img
        src={defaultpic}
        className=" w-[250px] h-[200px] lg:w-[350px] lg:h-[300px] rounded-md"
      />
      <div className=" block p-3">
        <h2 className=" text-lg font-bold">Title</h2>
        <p className=" text-base font-light">description</p>
        <CustomButton title="Details" styles="w-[100px] h-[40px]" />
      </div>
    </div>
  );
};
