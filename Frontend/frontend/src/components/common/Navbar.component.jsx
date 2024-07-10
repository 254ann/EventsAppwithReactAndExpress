import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContex';
function NavbarComponent() {
  const { user, logout } = useAuth();

  return (
    <nav>
       <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        {user ? (
          <>
            <li><Link to="/add-event">Add Event</Link></li>
            <li><button onClick={logout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavbarComponent
