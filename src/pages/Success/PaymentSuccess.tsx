import { Button } from "flowbite-react";
import { SuccessSVGIcon } from "../../components/Icon/SuccessSVGIcon";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetBookSlotData } from "../../redux/features/bookings/bookedSlotDataSlice";
import { useBookSlotMutation } from "../../redux/features/bookings/bookingsApi";
import toast from "react-hot-toast";

export const PaymentSuccess = () => {
  const navigate = useNavigate();
  const bookedSlotData = useAppSelector(
    (state) => state.bookedSlot.bookSlotData
  );
  const dispatch = useAppDispatch();
  const [bookSlot] = useBookSlotMutation();
  const handleGoHome = async () => {
    const res = await bookSlot(bookedSlotData).unwrap();
    if (res.statusCode === 200) {
      toast.success("Thank you for booking");
    }
    dispatch(resetBookSlotData());
    navigate("/");
  };

  return (
    <div className=" flex flex-col items-center h-[700px] justify-center">
      <div className=" flex flex-col items-center gap-2 rounded-md shadow-lg p-3">
        <SuccessSVGIcon />

        <h2 className=" text-green-600 font-bold text-2xl">
          Payment Successfull
        </h2>
        <p className=" font-bold">You have booked the slot</p>
        <Button color={"green"} onClick={handleGoHome}>
          Go Home
        </Button>
      </div>
    </div>
  );
};
