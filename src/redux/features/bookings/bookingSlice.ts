import { createSlice } from "@reduxjs/toolkit";

type TBookSlot = {
  slotId: null | string;
};
const initialValue: TBookSlot = {
  slotId: null,
};
const bookingSlice = createSlice({
  name: "bookSlot",
  initialState: initialValue,
  reducers: {
    setSlotForBook: (state, action) => {
      state.slotId = action.payload;
    },
    releaseSlotForBook: (state) => {
      state.slotId = null;
    },
  },
});

export const { setSlotForBook, releaseSlotForBook } = bookingSlice.actions;

export default bookingSlice.reducer;
