import { createSlice } from "@reduxjs/toolkit";

type TService = {
  serviceID: null | string;
};

const InitialState: TService = {
  serviceID: null,
};

const serviceSlice = createSlice({
  name: "serviceID",
  initialState: InitialState,
  reducers: {
    setServiceID: (state, action) => {
      state.serviceID = action.payload;
    },
    releaseServiceID: (state) => {
      state.serviceID = null;
    },
  },
});

export const { setServiceID, releaseServiceID } = serviceSlice.actions;

export default serviceSlice.reducer;
