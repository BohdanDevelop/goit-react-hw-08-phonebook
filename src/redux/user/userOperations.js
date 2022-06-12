import userRequests from '../../shared/services/user';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const getCurrentUser = createAsyncThunk(
//   'user/current',
//   async (_, { rejectWithValue, getState }) => {
//     try {
//       const { userStor } = getState();
//       const { token } = userStor;
//       const user = await userRequests.getCurrent(token);

//       return user;
//     } catch (error) {
//       rejectWithValue(error);
//     }
//   }
// );
const getCurrentUser = createAsyncThunk(
  'user/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { user } = getState();

      const { token } = user;
      console.log(token);
      const data = await userRequests.getCurrent(token);

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      if (!getState().user.token) return false;
    },
  }
);

const signUpUser = createAsyncThunk(
  'user/signUp',
  async (info, { rejectWithValue }) => {
    try {
      const data = await userRequests.signUpUser(info);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const LoginUser = createAsyncThunk(
  'user/login',
  async (info, { rejectWithValue }) => {
    try {
      const data = await userRequests.LogIn(info);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const LogoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await userRequests.logout();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const operations = {
  signUpUser,
  LoginUser,
  getCurrentUser,
  LogoutUser,
};
export default operations;
