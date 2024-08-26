import defaultpic from "../../assets/HeroSection-Carwash-cover1.jpg";
import { ServiceSlots } from "./ServiceSlots";
export const ServiceDetails = () => {
  return (
    <div className=" flex flex-col items-center ">
      <div className=" text-center">
        <h1 className=" mt-3 font-bebas text-sky-600 font-bold text-xl md:text-3xl p-1">
          Service Name
        </h1>
      </div>
      <div className=" bg-sky-400 w-[50px] h-[3px] my-[10px]"></div>
      <div className=" flex flex-col md:flex-row items-start justify-between md:w-[600px] ">
        <img
          src={defaultpic}
          className=" md:w-[350px] md:h-[300px] rounded-md w-[250px] h-[200px]"
        />
        <div className=" block p-3">
          <h2 className=" text-sky-600 font-bebas font-bold text-xl">
            Price: 550 (Taka)
          </h2>
          <h2 className=" text-sky-600 font-bebas font-bold text-xl">
            Duration: 80 (hours)
          </h2>
          <div className=" font-normal mt-3">
            <p>description</p>
          </div>
        </div>
      </div>
      <div className=" text-center">
        <h1 className=" mt-3 font-bebas text-sky-600 font-bold text-xl md:text-2xl p-1">
          Slots
        </h1>
      </div>
      <div className=" bg-sky-400 w-[50px] h-[3px] my-[10px]"></div>
      <ServiceSlots />
    </div>
  );
};
