import { baseAPI } from "../../api/baseAPI";

const slotsAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllSlots: builder.query({
      query: (queryParams) => {
        const params = new URLSearchParams();
        if (queryParams) {
          if (queryParams.serviceId) {
            params.append("serviceId", queryParams.serviceId);
          }
          if (queryParams.date) {
            params.append("date", queryParams.date);
          }
        }
        return {
          url: "/api/slots/availability",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["slots"],
    }),
    createSlots: builder.mutation({
      query: (newSlot) => {
        return {
          url: "/api/services/slots",
          method: "POST",
          body: newSlot,
        };
      },
      invalidatesTags: ["slots"],
    }),
  }),
});

export const { useGetAllSlotsQuery, useCreateSlotsMutation } = slotsAPI;
