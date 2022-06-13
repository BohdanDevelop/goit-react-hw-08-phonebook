import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const signUpUser = async info => {
  const { data } = await instance.post('users/signup', info);
  instance.defaults.headers.common.authorization = `Bearer ${data.token}`;
  return data;
};
const LogIn = async info => {
  const { data } = await instance.post('users/login', info);

  instance.defaults.headers.common.authorization = `Bearer ${data.token}`;
  return data;
};
const getCurrent = async token => {
  instance.defaults.headers.common.authorization = `Bearer ${token}`;
  try {
    const { data } = await instance.get('users/current');
    return data;
  } catch (error) {
    instance.defaults.headers.common.authorization = '';
    throw error;
  }
};
const logout = async () => {
  const { data } = await instance.post('users/logout');
  console.log('it is done here');
  instance.defaults.headers.common.authorization = '';
  return data;
};
const userRequests = { signUpUser, LogIn, instance, getCurrent, logout };
export default userRequests;
