import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/adds');

const removeContact = createAction('contacts/remove');

const actionCreators = {
  addContact,
  removeContact,
};
export default actionCreators;
