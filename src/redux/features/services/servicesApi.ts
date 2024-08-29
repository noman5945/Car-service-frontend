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
        }

        return {
          url: "/api/services",
          method: "GET",
          params: params,
        };
      },
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
  }),
});

export const { useGetInitalServicesQuery } = servicesAPI;
