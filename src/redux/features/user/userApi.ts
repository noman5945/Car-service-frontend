import { baseAPI } from "../../api/baseAPI";

const usersApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => {
        return {
          url: "/api/auth/all-users",
          method: "GET",
        };
      },
      providesTags: ["users"],
    }),
    updateUserRole: builder.mutation({
      query: (updateData) => {
        return {
          url: "/api/auth/update-role",
          method: "POST",
          body: updateData,
        };
      },
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useGetAllUsersQuery, useUpdateUserRoleMutation } = usersApi;
