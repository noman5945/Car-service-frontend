import { Button, Datepicker } from "flowbite-react";
import { InputText } from "../../components/InputText";
import { ConvertDateFormat } from "../../utils/DateProcess";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useAppDispatch } from "../../redux/hooks";
//import { releaseServiceID } from "../../redux/features/services/serviceSlice";

export const SlotDetails = () => {
  //const dispatch = useAppDispatch();

  const [newSlotDate, setNewSlotDate] = useState("");
  const navigation = useNavigate();
  const handleDate = (date: any) => {
    const newDate = ConvertDateFormat(date);
    setNewSlotDate(newDate);
  };
  const handleUpdateSlot = () => {
    const updatedData = {
      date: newSlotDate,
    };
    console.log(updatedData);
  };
  const handleGoToSlot = () => {
    //dispatch(releaseServiceID());
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
      <div className=" flex flex-col gap-3 w-[500px]">
        <div className=" flex flex-col">
          <h2 className=" text-xl font-bebas font-bold">Service Name</h2>
          <p>{}</p>
        </div>
        <div className=" flex flex-col">
          <h2>Start Time</h2>
          <InputText
            textType="text"
            inputLabel="Service Slot Start time"
            onChangeFunc={() => {}}
          />
        </div>
        <div className=" flex flex-col">
          <h2>End Time</h2>
          <InputText
            textType="text"
            inputLabel="Service Slot End time"
            onChangeFunc={() => {}}
          />
        </div>

        <div className=" flex flex-col">
          <h2>Date</h2>
          <InputText
            textType="text"
            inputLabel="Service Current Date"
            onChangeFunc={() => {}}
          />
        </div>

        <div className=" flex flex-col">
          <h2>Set New Date (For Update)</h2>
          <Datepicker onSelectedDateChanged={handleDate} />
        </div>
        <div className=" flex flex-row gap-2">
          <Button onClick={handleUpdateSlot}>Update</Button>
          <Button color="gray" onClick={handleGoToSlot}>
            Home
          </Button>
        </div>
      </div>
    </div>
  );
};
