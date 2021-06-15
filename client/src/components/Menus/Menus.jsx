import './Menus.css';
import { useState, useContext } from 'react';
import { MenuContext } from '../../screens/Dashboard/Dashboard.jsx';

function Menus () {
  const { menu, setGroups } = useContext(MenuContext);
  const [active, setActive] = useState(false);
  const menuList = menu.map(subMenu => <li key={subMenu._id} onClick={() => setGroups(subMenu.groups)} >{subMenu.name}</li>);

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