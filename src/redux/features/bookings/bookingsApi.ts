import { baseAPI } from "../../api/baseAPI";

const bookingApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    bookSlot: builder.mutation({
      query: (bookingData) => {
        return {
          url: "/api/bookings",
          method: "POST",
          body: bookingData,
        };
      },
    }),
  }),
});

export const { useBookSlotMutation } = bookingApi;
