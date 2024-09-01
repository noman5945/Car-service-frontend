import { Button, Datepicker, Select } from "flowbite-react";
import { InputText } from "../../components/InputText";
import { useNavigate } from "react-router-dom";
import { ConvertDateFormat } from "../../utils/DateProcess";
import { useState } from "react";
import { useGetInitalServicesQuery } from "../../redux/features/services/servicesApi";
import { CustomLoader } from "../../components/CustomLoader";
import { TService } from "../../types/service.type";
import { useAppDispatch } from "../../redux/hooks";
import { setServiceID } from "../../redux/features/services/serviceSlice";
import { useCreateSlotsMutation } from "../../redux/features/slots/slotsApi";

export const SlotsCreate = () => {
  const [newSlotDate, setNewSlotDate] = useState("");
  const [serviceid, setServiceid] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const { data: services, isLoading } = useGetInitalServicesQuery({
    isDeleted: false,
  });
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const [createSlots, { isLoading: createSlotLoader, isSuccess }] =
    useCreateSlotsMutation();

  const handleDate = (date: any) => {
    const newDate = ConvertDateFormat(date);
    setNewSlotDate(newDate);
  };
  const handleGoToSlot = () => {
    navigation("/dashboard/admin/slots");
  };
  const handleCreateSlots = async () => {
    const newSlotData = {
      service: serviceid,
      date: newSlotDate,
      startTime: startTime,
      endTime,
    };
    await createSlots(newSlotData).unwrap();
    if (isSuccess) {
      dispatch(setServiceID(serviceid));
    }
    console.log(newSlotData);
  };
  return (
    <div className=" flex flex-col items-center w-full">
      <div className=" flex items-center flex-col p-4">
        <h2 className=" font-bold font-sans text-lg text-sky-600  lg:text-2xl">
          Create Active Service Slots
        </h2>
        <div className=" bg-sky-400 w-[50px] h-[3px] my-[10px]"></div>
      </div>
      <div className=" flex flex-col gap-3 w-[500px]">
        <div className=" flex flex-col">
          <h2>Service Name</h2>
          <Select
            id="services"
            required
            onChange={(e) => setServiceid(e.target.value)}
          >
            {isLoading ? (
              <CustomLoader />
            ) : (
              services?.data?.map((service: TService) => {
                return (
                  <option key={service._id} value={service._id}>
                    {service.name}
                  </option>
                );
              })
            )}
          </Select>
        </div>
        <div className=" flex flex-col">
          <h2>Start Time (HH:MM)</h2>
          <InputText
            textType="text"
            inputLabel="Service Slot Start time"
            onChangeFunc={setStartTime}
          />
        </div>
        <div className=" flex flex-col">
          <h2>End Time (HH:MM)</h2>
          <InputText
            textType="text"
            inputLabel="Service Slot End time"
            onChangeFunc={setEndTime}
          />
        </div>

        <div className=" flex flex-col">
          <h2>Set New Date </h2>
          <Datepicker onSelectedDateChanged={handleDate} />
        </div>
        <div className=" flex flex-row gap-2">
          {createSlotLoader ? (
            <CustomLoader />
          ) : (
            <>
              <Button onClick={handleCreateSlots}>Create Slots</Button>
              <Button color="gray" onClick={handleGoToSlot}>
                Home
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
