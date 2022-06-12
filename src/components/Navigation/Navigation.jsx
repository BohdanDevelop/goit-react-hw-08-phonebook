import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selectors from '../../redux/user/selector';
import AuthMenu from '../AuthMenu';
import UserMenu from '../UserMenu';
const Navigation = () => {
  const isLogged = useSelector(value => selectors.selectLogged(value));
  console.log(isLogged);
  return (
    <nav>
      {isLogged ? <UserMenu /> : <AuthMenu />}
      {isLogged && <NavLink to="contacts">Contacts</NavLink>}
    </nav>
  );
};
export default Navigation;
