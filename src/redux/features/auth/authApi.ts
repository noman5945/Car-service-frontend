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
  }),
});

export const { useLoginMutation, useUserCreateMutation } = authAPI;
