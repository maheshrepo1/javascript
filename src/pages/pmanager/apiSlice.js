import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3004';

const axiosBaseQuery = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  },
});

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: async (args, api, extraOptions) => {
    try {
      const response = await axiosBaseQuery(args.endpoint, extraOptions);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },
  endpoints: (builder) => ({
    // Get all products
    getAllProducts: builder.query({
      query: () => ({ endpoint: '/posts' }),
    }),
    // Create a new product
    createProduct: builder.mutation({
      query: (newProduct) => ({
        endpoint: '/posts',
        method: 'POST',
        body: newProduct,
      }),
    }),
    // Update an existing product
    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => ({
        endpoint: `/posts/${id}`,
        method: 'PUT',
        body: updatedProduct,
      }),
    }),
    // Delete a product
    deleteProduct: builder.mutation({
      query: (id) => ({
        endpoint: `/posts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = apiSlice;

export const apiReducer = apiSlice.reducer;
