import { ServiceCard } from "../../components/ServiceCard";
import { ServiceFilterSection } from "./ServiceFilterSection";

export const Services = () => {
  return (
    <section className=" flex flex-col mx-0 items-center">
      <div className=" flex flex-col items-center justify-center mt-3">
        <h1 className=" text-xl lg:text-2xl font-bebas font-bold">
          All Services
        </h1>
        <div className=" bg-sky-400 w-[50px] h-[3px] my-[10px]"></div>
      </div>
      <div className=" py-5 px-2 bg-sky-100 rounded-md lg:w-[400px] w-[300px]">
        <ServiceFilterSection />
      </div>
      <div className=" bg-sky-400 w-[50px] h-[3px] my-[10px]"></div>
      <div className="">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  );
};
