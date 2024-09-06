import { Button } from "flowbite-react";
import { SuccessSVGIcon } from "../../components/Icon/SuccessSVGIcon";
import { useNavigate } from "react-router-dom";

export const PaymentSuccess = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <div className=" flex flex-col items-center h-[700px] justify-center">
      <div className=" flex flex-col items-center gap-2 rounded-md shadow-lg p-3">
        <SuccessSVGIcon />

        <h2 className=" text-green-600 font-bold text-2xl">
          Payment Success full
        </h2>
        <p className=" font-bold">You have booked the slot</p>
        <Button color={"green"} onClick={handleGoHome}>
          Go Home
        </Button>
      </div>
    </div>
  );
};
