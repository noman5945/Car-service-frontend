import { baseAPI } from "../../api/baseAPI";

const reviewApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllreviews: builder.query({
      query: (reviewQuery) => {
        const params = new URLSearchParams();
        return {
          url: "",
          method: "GET",
          params: params,
        };
      },
    }),
  }),
});

export const { useGetAllreviewsQuery } = reviewApi;
