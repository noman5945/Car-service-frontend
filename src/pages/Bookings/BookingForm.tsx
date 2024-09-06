import { useState } from "react";
import { InputText } from "../../components/InputText";
import { Button, Select } from "flowbite-react";
import toast from "react-hot-toast";
import { vehicleTypes } from "../../constants";
import { loadStripe } from "@stripe/stripe-js";
import { useAppDispatch } from "../../redux/hooks";
import { setBookSlotData } from "../../redux/features/bookings/bookedSlotDataSlice";

type BookingFormProps = {
  onCancelFunc?: React.MouseEventHandler;
  slotID: string | null;
  serviceID: string | null;
  item?: any | null;
};
export const BookingForm = ({
  onCancelFunc,
  slotID,
  serviceID,
  item,
}: BookingFormProps) => {
  const [customerName, setCustomerName] = useState("");
  const [vehicletype, setVehicleType] = useState("");
  const [vehicleBrand, setVehicleBrand] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [manufacture, setManufacture] = useState("");
  const [carRegi, setCarRegi] = useState("");

  const stripe_public_key = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
  const basAPI_URL = import.meta.env.VITE_LIVE_API;
  const baseUrl = window.location.origin;
  const success_page = `${baseUrl}/payment-success`;
  const failed_page = `${baseUrl}/payment-fail`;

  const dispatch = useAppDispatch();

  const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      customerName === "" ||
      vehicletype === "" ||
      vehicleBrand === "" ||
      vehicleModel === "" ||
      manufacture === "" ||
      carRegi === ""
    ) {
      toast.error("Some fields are missing.");
      return;
    }
    const bookingData = {
      slotId: slotID,
      serviceId: serviceID,
      vehicleType: vehicletype,
      vehicleBrand,
      vehicleModel,
      manufacturingYear: Number(manufacture),
      registrationPlate: carRegi,
    };
    const stripeData = {
      item,
      success_page,
      failed_page,
    };
    dispatch(setBookSlotData(bookingData));
    try {
      const response = await fetch(`${basAPI_URL}api/bookings/stripe-pay`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(stripeData),
        credentials: "include",
      });
      const { id } = await response.json();
      const stripe = await loadStripe(stripe_public_key);
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId: id });
      }
    } catch (error) {
      console.log(error);
      toast.error("Error occured while payment");
    }
    console.log(stripeData);
    console.log(bookingData);
  };
  return (
    <div>
      <div className=" shadow-md rounded-md w-[400px] p-2">
        <h2 className=" text-center font-bold text-xl">Booking Form</h2>
        <form
          className=" flex flex-col items-start"
          onSubmit={(e) => handleBooking(e)}
        >
          <div className=" w-full my-2">
            <InputText
              textType="text"
              inputLabel="Customer Name"
              onChangeFunc={setCustomerName}
            />
          </div>
          <div className=" w-full my-2">
            <Select
              id="vehicletypes"
              required
              onChange={(e) => setVehicleType(e.target.value)}
            >
              {vehicleTypes.map((vehicle, index) => {
                return (
                  <option key={index} value={vehicle}>
                    {vehicle}
                  </option>
                );
              })}
            </Select>
          </div>
          <div className=" w-full my-2">
            <InputText
              textType="text"
              inputLabel="Vehicle Brand"
              onChangeFunc={setVehicleBrand}
            />
          </div>
          <div className=" w-full my-2">
            <InputText
              textType="text"
              inputLabel="Vehicle Manufacturing Year"
              onChangeFunc={setManufacture}
            />
          </div>
          <div className=" w-full my-2">
            <InputText
              textType="text"
              inputLabel="Vehicle Model"
              onChangeFunc={setVehicleModel}
            />
          </div>
          <div className=" w-full my-2">
            <InputText
              textType="text"
              inputLabel="Vehicle Registration Number"
              onChangeFunc={setCarRegi}
            />
          </div>
          <div className=" flex flex-row gap-2">
            <Button type="submit">Pay Now</Button>
            <Button onClick={onCancelFunc}>Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
