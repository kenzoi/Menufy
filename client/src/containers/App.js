import './App.css';
import Header from '../components/Header/Header.jsx';
import Homepage from '../components/Homepage/Homepage.jsx';
import Exception from '../components/Exception/Exception.jsx';
import Login from '../components/Login/Login.jsx';
import Signup from '../components/Signup/Signup.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/Signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route component={Exception} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
