import './Menus.css';
import { useState, useContext } from 'react';
import { MenuContext } from '../../screens/Dashboard/Dashboard.jsx';

function Menus () {
  const { menu } = useContext(MenuContext);
  const [active, setActive] = useState(false);
  const menuList = menu.map(el => <li key={el._id}>{el.name}</li>);

  return (
    <>
      <button onClick={() => setActive((p) => !p)}>Select Menu</button>
      <nav className={`Menus__menu-panel--${active ? 'active' : 'inactive'}`}>
        <ul>
          {menuList}
        </ul>
      </nav>
    </>
  );
}

export default Menus;