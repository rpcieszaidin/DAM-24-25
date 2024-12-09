import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const recipeSlice = createApi({
  reducerPath: 'recipeSlice', 
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getAllRecipes: builder.query({
      query: () => 'recipes', 
    }),
    getRecipesById: builder.query({
        query: (id) => `recipes/${id}`, 
    }),
  }),
});

export const { useGetAllRecipesQuery, useGetRecipesByIdQuery } = recipeSlice;
