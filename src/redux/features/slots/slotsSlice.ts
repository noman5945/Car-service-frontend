import { createSlice } from "@reduxjs/toolkit";
type TSlotID = {
  slotID: string | null;
};

const InitialState: TSlotID = {
  slotID: null,
};
const slotSlice = createSlice({
  name: "slots",
  initialState: InitialState,
  reducers: {
    setSlotID: (state, action) => {
      state.slotID = action.payload;
    },
    releaseSlotID: (state) => {
      state.slotID = null;
    },
  },
});

export const { setSlotID, releaseSlotID } = slotSlice.actions;

export default slotSlice.reducer;
