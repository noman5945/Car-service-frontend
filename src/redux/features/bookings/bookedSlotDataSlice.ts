import { createSlice } from "@reduxjs/toolkit";

type TBookSlotData = {
  serviceId: string | null;
  slotId: string | null;
  vehicleType: string | null;
  vehicleBrand: string | null;
  vehicleModel: string | null;
  manufacturingYear: number | null;
  registrationPlate: string | null;
};
const initialBookSlotData: TBookSlotData = {
  serviceId: null,
  slotId: null,
  vehicleType: null,
  vehicleBrand: null,
  vehicleModel: null,
  manufacturingYear: null,
  registrationPlate: null,
};
const bookedSlotDataSlice = createSlice({
  name: "BookedSlot",
  initialState: { bookSlotData: initialBookSlotData },
  reducers: {
    setBookSlotData: (state, action) => {
      state.bookSlotData = { ...state.bookSlotData, ...action.payload };
    },
    resetBookSlotData: (state) => {
      state.bookSlotData = initialBookSlotData; // Reset to initial null values
    },
  },
});

export const { setBookSlotData, resetBookSlotData } =
  bookedSlotDataSlice.actions;

export default bookedSlotDataSlice.reducer;
