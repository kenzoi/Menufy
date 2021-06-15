import './Root.css';
import Header from '../../components/Header/Header.jsx';
import ScreensHomepage from '../Homepage/Homepage.jsx';
import ScreensException from '../Exception/Exception.jsx';
import ScreensLogin from '../Login/Login.jsx';
import ScreensSignup from '../Signup/Signup.jsx';
import ScreensDashboard from '../Dashboard/Dashboard.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState, createContext } from 'react';

export const UserContext = createContext();

function ScreensRoot () {
  const [user, setUser] = useState({ logged: false });

  function logIn ({ _id, username, email, restaurantName }) {
    setUser({
      logged: true,
      _id,
      username,
      email,
      restaurantName
    });
  }

  function logOut () {
    setUser({
      logged: false
    });
  }

  return (
    <BrowserRouter>
      <div className="screensRoot">
        <UserContext.Provider value={{ user, logIn, logOut }}>
          <Header />
          <Switch>
            <Route path="/" exact component={ScreensHomepage} />
            <Route path="/Signup" component={ScreensSignup} />
            <Route path="/login" component={ScreensLogin} />
            <Route path="/dashboard/:menuId" component={ScreensDashboard} />
            <Route path="/menu/:menuId" component={ScreensDashboard} />
            <Route component={ScreensException} />
          </Switch>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default ScreensRoot;
