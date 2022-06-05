import actionCreators from './actionCreators';
import { createReducer } from '@reduxjs/toolkit';
const filterReducer = createReducer('', {
  [actionCreators.setFilter]: (store, { payload }) => payload,
});
export default filterReducer;
