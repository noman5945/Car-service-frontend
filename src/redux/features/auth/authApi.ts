import { baseAPI } from "../../api/baseAPI";

const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "api/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    userCreate: builder.mutation({
      query: (newUserInfo) => ({
        url: "api/auth/signup",
        method: "POST",
        body: newUserInfo,
      }),
    }),
    getUserInfo: builder.query({
      query: (userID) => {
        const params = new URLSearchParams();
        if (userID) {
          params.append("userID", userID);
        }
        return {
          url: "/api/auth/user-id",
          method: "GET",
          params: params,
        };
      },
    }),
    updateUserInfo: builder.mutation({
      query: (updateInfo) => {
        return {
          url: "/api/auth/update-info",
          method: "PUT",
          body: updateInfo,
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useUserCreateMutation,
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
} = authAPI;
