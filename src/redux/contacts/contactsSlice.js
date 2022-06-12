import { createSlice } from '@reduxjs/toolkit';
import functions from './contactsOperation';
const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [functions.fetchNumbers.pending]: (store, _) => ({
      ...store,
      loading: true,
    }),
    [functions.fetchNumbers.fulfilled]: (store, { payload }) => {
      if (payload.length) {
        return {
          ...store,
          items: [...payload],
          loading: false,
        };
      }
    },
    [functions.fetchNumbers.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    [functions.addNumber.pending]: (store, _) => ({
      ...store,
      loading: true,
    }),
    [functions.addNumber.fulfilled]: (store, { payload }) => {
      if (payload) {
        return {
          ...store,
          loading: false,
          items: [...store.items, payload],
        };
      }
    },
    [functions.addNumber.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    [functions.deleteNumber.pending]: (store, _) => ({
      ...store,
      loading: true,
    }),
    [functions.deleteNumber.fulfilled]: (store, { payload }) => {
      console.log(payload);
      return {
        ...store,
        loading: false,
        items: store.items.filter(element => {
          return element.id !== payload;
        }),
      };
    },
    [functions.deleteNumber.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
  },
});

export default contactsSlice.reducer;
