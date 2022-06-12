const selectLogged = value => value.user.isLogged;
const selectUser = value => value.user.user.name;
const selectors = { selectLogged, selectUser };
export default selectors;
