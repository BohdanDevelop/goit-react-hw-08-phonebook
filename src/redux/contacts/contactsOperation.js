import { createAsyncThunk } from '@reduxjs/toolkit';
import numbers from '../../shared/services/numbers';

const fetchNumbers = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const data = await numbers.fetchNumbers();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const deleteNumber = createAsyncThunk(
  'contacts/delete',
  async (data, { rejectWithValue }) => {
    try {
      await numbers.deleteNumber(data);

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const addNumber = createAsyncThunk(
  'contacts/add',
  async (info, { rejectWithValue, getState }) => {
    try {
      // const { contacts } = getState();

      // const allTheName = contacts.items.map(elem => elem.name.toUpperCase());

      // if (allTheName.includes(data.name.toUpperCase())) {
      //   alert(`${data.name} is already in contacts`);
      //   return;
      // }
      const { data } = await numbers.addNumber(info);
      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const functions = {
  fetchNumbers,
  deleteNumber,
  addNumber,
};

export default functions;
