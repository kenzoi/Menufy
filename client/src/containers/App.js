import './App.css';
import Header from '../components/header/header.jsx';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';



function App () {
  return (
    <BrowserRouter>
    <div className="App">
        <Header />
        <Route path="/" render={() => "Root"} />
        <Route path="/menus" render={() => "Menus"} />
      </div>
    </BrowserRouter>
  );
}

export default App;
