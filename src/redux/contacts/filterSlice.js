import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    set: (state, { payload }) => {
      return payload;
    },
  },
});
const params = { reducer: filterSlice.reducer, action: filterSlice.actions };
export default params;
