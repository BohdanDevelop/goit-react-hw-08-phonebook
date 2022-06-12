import './AuthMenu.scss';

import { NavLink } from 'react-router-dom';
const AuthMenu = () => {
  return (
    <div>
      <NavLink className="navlink" to="register">Register</NavLink>
      <NavLink className="navlink" to="login">Log in</NavLink>
    </div>
  );
};
export default AuthMenu;
