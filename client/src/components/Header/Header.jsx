import './Header.css';
import { Link } from 'react-router-dom';
function Header () {

  return (<header className="App-header">
    <nav>
      <ul>
        <li><Link to="/signup">Sign up</Link></li>
        <li><Link to="/login">Log in</Link> </li>
      </ul>
    </nav>

  </header>);
}

export default Header;