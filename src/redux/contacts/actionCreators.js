import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/adds');

const removeContact = createAction('contacts/remove');

const setFilter = createAction('filter/set');

const actionCreators = {
  addContact,
  removeContact,
  setFilter,
};
export default actionCreators;
