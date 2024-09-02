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
    getSingleSlot: builder.query({
      query: (queryParams) => {
        const params = new URLSearchParams();
        if (queryParams.slotID) {
          params.append("slotID", queryParams.slotID);
        }
        return {
          url: "/api/slots/single-slot",
          method: "GET",
          params: params,
        };
      },
    }),
  }),
});

export const {
  useGetAllSlotsQuery,
  useCreateSlotsMutation,
  useGetSingleSlotQuery,
} = slotsAPI;
