import { createSlice } from '@reduxjs/toolkit';
import operations from './userOperations';
const initialState = {
  user: {},
  token: '',
  error: null,
  loading: false,
  isLogged: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [operations.signUpUser.pending]: (store, _) => {
      return { ...store, loading: true, error: null };
    },
    [operations.signUpUser.fulfilled]: (store, { payload }) => {
      return {
        ...store,
        loading: false,
        user: payload.user,
        token: payload.token,
        isLogged: true,
      };
    },
    [operations.signUpUser.rejected]: (store, { payload }) => {
      return { ...store, loading: false, error: payload };
    },
    [operations.LoginUser.pending]: (store, _) => {
      return { ...store, loading: true, error: null };
    },
    [operations.LoginUser.fulfilled]: (store, { payload }) => {
      return {
        ...store,
        loading: false,
        user: payload.user,
        token: payload.token,
        isLogged: true,
      };
    },
    [operations.LoginUser.rejected]: (store, { payload }) => {
      return { ...store, loading: false, error: payload };
    },
    [operations.getCurrentUser.pending]: (store, _) => ({
      ...store,
      loading: true,
      error: null,
    }),
    [operations.getCurrentUser.fulfilled]: (store, { payload }) => {
      return {
        ...store,
        loading: false,
        isLogged: true,
        user: payload,
      };
    },
    [operations.getCurrentUser.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
      token: '',
    }),
    [operations.LogoutUser.pending]: (store, _) => {
      return { ...store, loading: true, error: null };
    },
    [operations.LogoutUser.fulfilled]: (store, _) => {
      return {
        ...store,
        loading: false,
        user: {},
        token: '',
        isLogged: false,
      };
    },
    [operations.LogoutUser.rejected]: (store, _) => {
      return { ...store, loading: false, error: 'logout is not successful' };
    },
  },
});

export default userSlice.reducer;
