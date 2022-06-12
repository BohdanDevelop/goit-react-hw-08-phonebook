import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selectors from '../../../redux/user/selector';

const PublicRoute = () => {
  const isLogged = useSelector(value => selectors.selectLogged(value));
  if (isLogged) {
    return <Navigate replace to="/" />;
  }
  return <Outlet />;
};
export default PublicRoute;
