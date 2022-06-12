import LoginForm from '../LoginForm';
import operations from '../../redux/user/userOperations';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import selectors from '../../redux/user/selector';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const isLogged = useSelector(value => selectors.selectLogged(value));
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogged) navigate('/contacts', { replace: true });
  }, [isLogged, navigate]);
  const dispatch = useDispatch();
  const submit = userData => {
    dispatch(operations.LoginUser(userData));
  };
  return <LoginForm onSubmit={submit} />;
};
export default SignUp;
