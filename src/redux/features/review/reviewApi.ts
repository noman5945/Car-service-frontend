import { baseAPI } from "../../api/baseAPI";

const reviewApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllreviews: builder.query({
      query: (reviewQuery) => {
        const params = new URLSearchParams();
        return {
          url: "api/reviews/",
          method: "GET",
          params: params,
        };
      },
    }),
    postReview: builder.mutation({
      query: (reviewBody) => {
        return {
          url: "api/reviews/post-review",
          method: "POST",
          body: reviewBody,
        };
      },
    }),
  }),
});

export const { useGetAllreviewsQuery, usePostReviewMutation } = reviewApi;
