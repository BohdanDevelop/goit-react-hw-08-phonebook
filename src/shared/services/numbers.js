import userRequests from './user';
// const instance = axios.create({
//   baseURL: 'https://62a23736cc8c0118ef5f0df2.mockapi.io/api/v1/numbers/',
// });

const fetchNumbers = async () => {
  const { data } = await userRequests.instance.get('/contacts');

  return data;
};

const deleteNumber = async id => {
  console.log(deleteNumber);
  const deletedNumbers = await userRequests.instance.delete(`/contacts/${id}`);

  return deletedNumbers;
};
const addNumber = async info => {
  const addedNumber = await userRequests.instance.post('/contacts', info);

  return addedNumber;
};
const numbers = { fetchNumbers, deleteNumber, addNumber };
export default numbers;
