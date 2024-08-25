import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton";
import { servicesDesc } from "../../constants";
import { ItemCard } from "../../components/ItemCard";

export const ServiceDemoSection = () => {
  const navigator = useNavigate();
  const handleGoToServices = () => {
    navigator("/services");
  };
  return (
    <section className="flex flex-col items-center  my-[70px] lg:mx-10">
      <div className=" flex flex-col justify-center items-center p-4 ">
        <p className=" font-bold text-3xl underline underline-offset-2 decoration-sky-800 font-bebas">
          Services
        </p>
        <div className=" flex flex-col p-4">
          <p className=" font-light lg:text-lg text-base text-center">
            {servicesDesc}
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-2 p-2 my-3">
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
      <CustomButton
        title="More Services"
        onClickFunc={handleGoToServices}
        styles=" w-[150px] h-[40px]"
        textStyle="text-base"
      />
    </section>
  );
};
