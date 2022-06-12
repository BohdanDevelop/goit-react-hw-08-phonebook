import SignUpForm from '../SignUpForm';
import operations from '../../redux/user/userOperations';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import selectors from '../../redux/user/selector';

const SignUp = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(value => selectors.selectLogged(value));
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogged) navigate('/contacts', { replace: true });
  }, [isLogged, navigate]);
  const submit = userData => {
    dispatch(operations.signUpUser(userData));
  };
  return <SignUpForm onSubmit={submit} />;
};
export default SignUp;
