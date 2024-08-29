import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

type ServiceCardProps = {
  name: string;
  desc: string;
  price: number;
  duration: number;
};
export const ServiceCard = ({
  name,
  desc,
  price,
  duration,
}: ServiceCardProps) => {
  const navigate = useNavigate();
  const handleGoToDetails = () => {
    navigate("/service-details");
  };
  return (
    <div className=" my-3 p-3 flex flex-col md:flex-row  items-start w-[350px] md:w-[1000px] border border-sky-300 shadow-md rounded-sm">
      <div className=" flex flex-col py-2 w-[80%]">
        <div className=" p-1 ">
          <h1 className=" text-sky-500 font-bold font-bebas text-xl md:text-2xl">
            {name}
          </h1>
        </div>
        <div className=" font-light ">
          <p>{desc}</p>
        </div>
        <div className=" ">
          <p className=" font-bold ">Price: {price}</p>
        </div>
        <div className=" ">
          <p className=" font-bold ">Duration: {duration}</p>
        </div>
      </div>
      <div className=" p-3 ">
        <Button className=" w-[200px]" onClick={handleGoToDetails}>
          Details
        </Button>
      </div>
    </div>
  );
};
