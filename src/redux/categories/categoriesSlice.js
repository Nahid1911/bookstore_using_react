import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: () => 'Under Constructon',
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
