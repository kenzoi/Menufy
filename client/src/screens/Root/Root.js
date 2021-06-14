import './Root.css';
import Header from '../../components/Header/Header.jsx';
import ScreensHomepage from '../Homepage/Homepage.jsx';
import ScreensException from '../Exception/Exception.jsx';
import ScreensLogin from '../Login/Login.jsx';
import ScreensSignup from '../Signup/Signup.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



function ScreensRoot () {
  return (
    <BrowserRouter>
      <div className="screensRoot">
        <Header />
        <Switch>
          <Route path="/" exact component={ScreensHomepage} />
          <Route path="/Signup" component={ScreensSignup} />
          <Route path="/login" component={ScreensLogin} />
          <Route component={ScreensException} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default ScreensRoot;
