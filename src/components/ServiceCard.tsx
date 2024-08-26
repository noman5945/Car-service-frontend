import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export const ServiceCard = () => {
  const navigate = useNavigate();
  const handleGoToDetails = () => {
    navigate("/service-details");
  };
  return (
    <div className=" my-3 p-3 flex flex-col md:flex-row  items-start w-[350px] md:w-[1000px] border border-sky-300 shadow-md rounded-sm">
      <div className=" flex flex-col py-2 w-[80%]">
        <div className=" p-1 ">
          <h1 className=" text-sky-500 font-bold font-bebas text-xl md:text-2xl">
            Service Name
          </h1>
        </div>
        <div className=" font-light ">
          <p>description</p>
        </div>
        <div className=" ">
          <p className=" font-bold ">Price:</p>
        </div>
        <div className=" ">
          <p className=" font-bold ">Duration:</p>
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
