import './Menus.css';
import { useState, useContext } from 'react';
import { MenuContext } from '../../screens/Dashboard/Dashboard.jsx';

function Menus () {
  const { menu, setGroups, setActiveMenu } = useContext(MenuContext);
  const [active, setActive] = useState(false);
  const menuList = menu.map(subMenu => (
    <li className="Menus__menu-items" key={subMenu._id} onClick={() => handleOnclick(subMenu)} >{subMenu.name}</li>));

  function handleOnclick (subMenu) {
    setGroups(subMenu.groups);
    setActive(false);
    setActiveMenu(subMenu);
  }

  return (
    <>
      <button className="Menus__button" onClick={() => setActive((p) => !p)}>Select Menu</button>
      <nav className={`Menus__menu-panel--${active ? 'active' : 'inactive'}`}>
        <ul className="Menus__menu-list">
          {menuList}
        </ul>
      </nav>
    </>
  );
}

export default Menus;