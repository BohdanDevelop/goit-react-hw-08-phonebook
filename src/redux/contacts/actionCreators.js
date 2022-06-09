import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addContact = createAction('contacts/adds', info => {
  return {
    payload: {
      ...info,
      id: nanoid(),
    },
  };
});

const removeContact = createAction('contacts/remove');

const setFilter = createAction('filter/set');

const actionCreators = {
  addContact,
  removeContact,
  setFilter,
};
export default actionCreators;
