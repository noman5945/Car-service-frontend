import { Button } from "flowbite-react";
import { HeroSectionLine } from "../constants";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();
  const handleGoToService = () => {
    navigate("/services");
  };
  return (
    <section className=" relative bg-hero-back bg-cover bg-center bg-no-repeat h-[650px]">
      <div className="absolute inset-0 bg-gray-900/75 bg-gradient-to-r sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      <div className=" relative mx-auto max-w-screen-xl flex flex-col items-center text-center">
        <h1 className=" text-white text-2xl lg:text-4xl lg:pt-[20%] pt-[50%] font-bold font-bebas my-3">
          {HeroSectionLine}
        </h1>
        <Button
          className=" w-[200px] h-[50px]  text-center rounded-sm"
          onClick={handleGoToService}
        >
          <p className="text-xl font-bold"> Explore Services </p>
        </Button>
      </div>
    </section>
  );
};
