import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContex'
import LogoutComponent from '../Auth/Logout.component'

function NavbarComponent() {
    const {user} = useContext(AuthContext);
  return (
    <nav>
      <Link to="/">Home</Link>
      {user ? (
        <>
        <LogoutComponent/>
        </>
      ): (
        <>
        <Link to ="/login">Login</Link>
        <Link to ="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default NavbarComponent
