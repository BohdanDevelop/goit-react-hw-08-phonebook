import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://62a23736cc8c0118ef5f0df2.mockapi.io/api/v1/numbers/',
});

const fetchNumbers = async () => {
  const numbers = await instance.get('');
  return numbers;
};

const deleteNumber = async id => {
  const deletedNumbers = await instance.delete(`${id}`);
  return deletedNumbers;
};
const addNumber = async info => {
  const addedNumber = await instance.post('', info);
  return addedNumber;
};
const numbers = { fetchNumbers, deleteNumber, addNumber };
export default numbers;
