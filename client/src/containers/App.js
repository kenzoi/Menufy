import './App.css';
import Header from '../components/Header/Header.jsx';
import Homepage from '../components/Homepage/Homepage.jsx';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';



function App () {
  return (
    <BrowserRouter>
    <div className="App">
        <Header />
        <Route path="/" component={Homepage} />
        <Route path="/menus" render={() => "Menus"} />
      </div>
    </BrowserRouter>
  );
}

export default App;
