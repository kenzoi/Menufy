import './Dashboard.css';
import { useEffect, useState, createContext, useContext } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../../services/apiClient';
import Menus from '../../components/Menus/Menus.jsx';
import Groups from '../../components/Groups/Groups.jsx';
import AddButton from '../../components/AddButton/AddButton.jsx';
import { UserContext } from '../Root/Root';

export const MenuContext = createContext();

function ScreensDashboard () {
  const { user } = useContext(UserContext);
  const { menuId } = useParams();
  const [menu, setMenu] = useState([]);
  const [activeMenu, setActiveMenu] = useState({});
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    async function getMenu () {
      const response = await apiClient.getMenu(menuId);
      if (response.ok) {
        const { menu } = await response.json();
        setMenu(menu);
      }
    }
    getMenu();
  }, [menuId]);

  return (
    <main>
      <div className="Dashboard__restaurant-name">
        <h1>{user.restaurantName ? user.restaurantName : null}</h1>
      </div>
      <MenuContext.Provider value={{ menu, setMenu, groups, setGroups, activeMenu, setActiveMenu }}>
        <Menus />
        <div className="Dashboard__selected-submenu">
          <h2>{activeMenu.name ? activeMenu.name : null}</h2>
        </div>
        <Groups />
        {user.logged ? <AddButton /> : null}
      </MenuContext.Provider>
    </main>
  );
}

export default ScreensDashboard;