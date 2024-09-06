import { useNavigate } from "react-router-dom";
import { CustomLoader } from "../../components/CustomLoader";
import { useGetSingleSlotQuery } from "../../redux/features/slots/slotsApi";
import { releaseSlotID } from "../../redux/features/slots/slotsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { BookingForm } from "./BookingForm";
import { useEffect, useState } from "react";

export const Bookings = () => {
  const { slotID } = useAppSelector((state) => state.slot);
  const { serviceID } = useAppSelector((state) => state.service);
  const [slotItem, setSlotItem] = useState({});
  const dispatcher = useAppDispatch();
  const navigator = useNavigate();
  const {
    data: slot,
    isError,
    error,
    isLoading,
  } = useGetSingleSlotQuery({ slotID });
  const handleGoToSlots = () => {
    dispatcher(releaseSlotID());
    navigator("/service-details");
  };
  useEffect(() => {
    setSlotItem({
      ServiceName: slot?.data?.service?.name,
      date: slot?.data?.date,
      startTime: slot?.data?.startTime, // Custom metadata for the start time
      endTime: slot?.data?.endTime,
      price: Number(slot?.data?.service?.price),
    });
  }, [slot]);

  return (
    <div className=" flex flex-col items-center">
      <div className=" text-center">
        <h1 className=" mt-3 font-bebas text-sky-600 font-bold text-xl md:text-2xl p-1">
          Book Service
        </h1>
      </div>
      <div className=" bg-sky-400 w-[50px] h-[3px] my-[10px]"></div>
      <div className=" flex flex-col-reverse md:flex-row gap-2">
        <div className=" flex flex-col w-[400px]">
          <h2 className=" font-bold text-xl">Selected Slot Info</h2>
          {isLoading ? (
            <div className=" flex flex-col items-center w-full">
              <CustomLoader />
            </div>
          ) : isError ? (
            <div className=" my-3 p-2 flex flex-col items-center w-full text-xl text-red-600">
              Error occured while loading! {String(error)}
            </div>
          ) : (
            <>
              <div className=" flex flex-col items-start rounded-md shadow-md p-3">
                <h2 className="">{slot?.data?.service?.name}</h2>
                <p className=" text-base">
                  <span className=" font-bold">Date: </span>
                  {slot?.data?.date}
                </p>
                <p className=" text-base">
                  <span className=" font-bold">Time:</span>
                  {slot?.data?.startTime}-{slot?.data?.endTime}
                </p>
                <p className=" text-base">
                  <span className=" font-bold">Price:</span>
                  {slot?.data?.service?.price} Tk
                </p>
              </div>
            </>
          )}
        </div>
        <div>
          <BookingForm
            onCancelFunc={handleGoToSlots}
            slotID={slotID}
            serviceID={serviceID}
            item={slotItem}
          />
        </div>
      </div>
    </div>
  );
};
