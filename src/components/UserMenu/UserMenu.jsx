import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import selectors from '../../redux/user/selector';
import operations from '../../redux/user/userOperations';
const UserMenu = () => {
  const name = useSelector(value => selectors.selectUser(value));
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(operations.LogoutUser());
  };
  return (
    <div>
      {name} | <button onClick={logoutUser}>Log out</button>
    </div>
  );
};
export default UserMenu;
