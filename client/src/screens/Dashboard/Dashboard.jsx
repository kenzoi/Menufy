import { useEffect, useState, createContext, useContext } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../../services/apiClient';
import { UserContext } from '../Root/Root';
import Menus from '../../components/Menus/Menus.jsx';
import Groups from '../../components/Groups/Groups.jsx';
import AddButton from '../../components/AddButton/AddButton.jsx';

export const MenuContext = createContext();

function ScreensDashboard () {
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
      <MenuContext.Provider value={{ menu, setMenu, groups, setGroups, activeMenu, setActiveMenu }}>
        <Menus />
        <h2>{activeMenu.name ? activeMenu.name : null}</h2>
        <Groups />
        <AddButton />
      </MenuContext.Provider>
    </main>
  );
}

export default ScreensDashboard;