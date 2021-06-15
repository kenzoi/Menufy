import './Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../screens/Root/Root';

function Header () {
  const { user, logOut } = useContext(UserContext);

  function userOptions () {
    if (user.logged) {
      return (
        <>
          <li>{user.email}</li>
          <li><Link to="/" onClick={logOut}>Log out</Link></li>
        </>
      );
    } else {
      return (
        <>
          <li><Link to="/signup">Sign up</Link></li>
          <li><Link to="/login">Log in</Link> </li>
        </>
      );
    }
  }

  return (<header className="App-header">
    <nav>
      <ul>
        {userOptions()}
      </ul>
    </nav>

  </header>);
}

export default Header;