import { baseAPI } from "../../api/baseAPI";

const servicesAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getInitalServices: builder.query({
      query: (queries) => {
        const params = new URLSearchParams();
        if (queries) {
          if (queries.limit) {
            params.append("limit", queries.limit);
          }
          if (queries.sort) {
            params.append("sort", queries.sort);
          }
          if (queries.name) {
            params.append("name", queries.name);
          }
          if (queries.duration) {
            params.append("duration", queries.duration);
          }
          if (queries.price) {
            params.append("price", queries.price);
          }
          if (queries.isDeleted !== undefined) {
            params.append("isDeleted", queries.isDeleted);
          }
        }
        console.log(params);

        return {
          url: "/api/services",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["services"],
    }),
    getFilterdServices: builder.query({
      query: (queries) => {
        const params = new URLSearchParams();
        if (queries) {
          if (queries.limit) {
            params.append("limit", queries.limit);
          }
        }

        return {
          url: "/api/services",
          method: "GET",
          params: params,
        };
      },
    }),
    getSingleService: builder.query({
      query: (id) => {
        return {
          url: `/api/services/${id}`,
          method: "GET",
        };
      },
    }),
    createNewService: builder.mutation({
      query: (newServiceInfo) => {
        return { url: "/api/services", method: "POST", body: newServiceInfo };
      },
    }),
    updateService: builder.mutation({
      query: (updatedData) => {
        let id;
        for (let key in updatedData) {
          if (key === "serviceID") {
            id = updatedData[key];
          }
        }
        delete updatedData["serviceID"];
        return {
          url: `/api/services/${id}`,
          method: "PUT",
          body: updatedData,
        };
      },
    }),
    deleteService: builder.mutation({
      query: (id) => {
        return { url: `/api/services/${id}`, method: "DELETE" };
      },
    }),
  }),
});

export const {
  useGetInitalServicesQuery,
  useGetSingleServiceQuery,
  useCreateNewServiceMutation,
  useDeleteServiceMutation,
  useUpdateServiceMutation,
} = servicesAPI;
