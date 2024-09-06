import { Button } from "flowbite-react";
import { ErrorSVGIConn } from "../../components/Icon/ErrorSVGIConn";

export const PaymentFailed = () => {
  return (
    <div className=" flex flex-col items-center h-[700px] justify-center">
      <div className=" flex flex-col items-center gap-2 rounded-md shadow-lg p-3">
        <ErrorSVGIConn />

        <h2 className="  text-red-700 font-bold text-2xl">Payment Failed!</h2>
        <p className=" font-bold">Booking failed due to failed payment</p>
        <Button color={"red"}>Go Home</Button>
      </div>
    </div>
  );
};
