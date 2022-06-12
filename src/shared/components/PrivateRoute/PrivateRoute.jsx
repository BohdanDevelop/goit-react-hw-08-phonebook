import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selectors from '../../../redux/user/selector';

const PrivateRoute = () => {
  const isLogged = useSelector(value => selectors.selectLogged(value));
  if (isLogged) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};
export default PrivateRoute;
