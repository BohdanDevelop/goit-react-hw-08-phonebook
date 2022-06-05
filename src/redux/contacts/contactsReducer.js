import actionCreators from './actionCreators';
import { createReducer } from '@reduxjs/toolkit';
const initialStore = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const contactsReducer = createReducer(initialStore, {
  [actionCreators.addContact]: (store, { payload }) => {
    console.log(payload);
    return [...store, payload];
  },
  [actionCreators.removeContact]: (store, { payload }) =>
    store.filter(element => element.name.toLowerCase() !== payload),
});

export default contactsReducer;
