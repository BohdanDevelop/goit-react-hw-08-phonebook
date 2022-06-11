const selectValue = value => {
  return value.contacts;
};
const selectFilter = value => {
  return value.filter;
};
const selectors = {
  selectValue,
  selectFilter,
};
export default selectors;
