import { Button, Datepicker } from "flowbite-react";
import { InputText } from "../../components/InputText";
import { ConvertDateFormat } from "../../utils/DateProcess";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { releaseSlotID } from "../../redux/features/slots/slotsSlice";
import { useGetSingleSlotQuery } from "../../redux/features/slots/slotsApi";
import { CustomLoader } from "../../components/CustomLoader";
//import { releaseServiceID } from "../../redux/features/services/serviceSlice";

export const SlotDetails = () => {
  const dispatch = useAppDispatch();
  const { slotID } = useAppSelector((state) => state.slot);
  const [slotQueryID, setSlotQueryID] = useState({ slotID });
  const [newSlotDate, setNewSlotDate] = useState("");

  const navigation = useNavigate();
  const handleDate = (date: any) => {
    const newDate = ConvertDateFormat(date);
    setNewSlotDate(newDate);
  };
  useEffect(() => {
    setSlotQueryID({ slotID });
  }, [slotID]);
  const {
    data: slotData,
    isLoading,
    isError,
  } = useGetSingleSlotQuery(slotQueryID);
  const [slotStartTime, setSlotStartTime] = useState(slotData?.data?.startTime);
  const [slotEndTime, setSlotEndTime] = useState(slotData?.data?.endTime);

  const handleUpdateSlot = () => {
    const updatedData = {
      slotID: slotID,
      date: newSlotDate,
      startTime: slotStartTime,
      endTime: slotEndTime,
    };
    console.log(updatedData);
  };
  const handleGoToSlot = () => {
    //dispatch(releaseServiceID());
    dispatch(releaseSlotID());
    navigation("/dashboard/admin/slots");
  };

  return (
    <div className=" flex flex-col w-full items-center">
      <div className=" flex items-center flex-col p-4">
        <h2 className=" font-bold font-sans text-lg text-sky-600  lg:text-2xl">
          Slot Details
        </h2>
        <div className=" bg-sky-400 w-[50px] h-[3px] my-[10px]"></div>
      </div>
      {isLoading ? (
        <CustomLoader />
      ) : isError ? (
        <>
          <h2 className=" text-center font-bold text-2xl text-red-600 ">
            ERROR OCCURED WHILE LOADING
          </h2>
        </>
      ) : (
        <>
          <div className=" flex flex-col gap-3 w-[500px]">
            <div className=" flex flex-col">
              <h2 className=" text-xl font-bebas font-bold">Service Name</h2>
              <p>{slotData?.data?.service?.name}</p>
              {slotData?.data?.isBooked === "booked" ? (
                <>
                  <h2 className=" text-xl text-red-600 font-bold">
                    BOOKED (CANNOT UPDATE)
                  </h2>
                </>
              ) : null}
            </div>
            <div className=" flex flex-col">
              <h2>
                Start Time :
                <span className=" font-bold text-lg">
                  {slotData?.data?.startTime}
                </span>{" "}
              </h2>
              <InputText
                textType="text"
                inputLabel="Set New Slot Start time (HH:MM)"
                onChangeFunc={setSlotStartTime}
              />
            </div>
            <div className=" flex flex-col">
              <h2>
                End Time:{" "}
                <span className=" font-bold text-lg">
                  {slotData?.data?.endTime}
                </span>{" "}
              </h2>
              <InputText
                textType="text"
                inputLabel="Set New Slot End time (HH:MM)"
                onChangeFunc={setSlotEndTime}
              />
            </div>

            <div className=" flex flex-col">
              <h2>
                Date:{" "}
                <span className=" font-bold text-lg">
                  {slotData?.data?.date}
                </span>
              </h2>
            </div>

            <div className=" flex flex-col">
              <h2> Set New Date (For Update)</h2>
              <Datepicker onSelectedDateChanged={handleDate} />
            </div>
            <div className=" flex flex-row gap-2">
              <Button
                onClick={handleUpdateSlot}
                disabled={slotData?.data?.isBooked !== "available"}
              >
                Update
              </Button>
              <Button color="gray" onClick={handleGoToSlot}>
                Home
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
