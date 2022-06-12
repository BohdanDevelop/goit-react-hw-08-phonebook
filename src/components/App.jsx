import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import ContactsPage from './Pages/ContactsPage/ContactsPage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../redux/user/userOperations';
import PrivateRoute from '../shared/components/PrivateRoute';
import PublicRoute from '../shared/components/PublicRoute';
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.getCurrentUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<PrivateRoute />}>
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
