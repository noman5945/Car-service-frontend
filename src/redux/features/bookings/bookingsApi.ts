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
    getUserBookings: builder.query({
      query: () => {
        return {
          url: "/api/my-bookings",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useBookSlotMutation, useGetUserBookingsQuery } = bookingApi;
