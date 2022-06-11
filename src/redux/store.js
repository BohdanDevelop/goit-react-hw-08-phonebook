import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';
import filter from './contacts/filterSlice';

export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filter.reducer },
});
