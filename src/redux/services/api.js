import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  keepUnusedDataFor: 60,
  tagTypes: ["review"],
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
    }),
    getRestaurantById: builder.query({
      query: (id) => `/restaurant/${id}`,
    }),
    getDishesByRestaurantId: builder.query({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
    }),
    getDishById: builder.query({
      query: (id) => `/dish/${id}`,
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: (_, __, restaurantId) => 
        [{ type: "review", id: restaurantId }]
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: (_, __, { restaurantId }) => [
        { type: "review", id: restaurantId },
      ],
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const { 
    useGetRestaurantsQuery, 
    useGetDishesByRestaurantIdQuery, 
    useGetRestaurantByIdQuery,
    useGetReviewsByRestaurantIdQuery,
    useGetUsersQuery,
    useGetUserByIdQuery,
    useGetDishByIdQuery,
    useAddReviewMutation,
} = api;
