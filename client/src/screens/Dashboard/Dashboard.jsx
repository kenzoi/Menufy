import { useEffect, useState, createContext, useContext } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../../services/apiClient';
import { UserContext } from '../Root/Root';
import Menus from '../../components/Menus/Menus.jsx';

export const MenuContext = createContext();

function ScreensDashboard () {
  const { menuId } = useParams();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function getMenu () {
      const response = await apiClient.getMenu(menuId);
      if (response.ok) {
        const { menu } = await response.json();
        console.log(menu);
        setMenu(menu);
      }
    }
    getMenu();
  }, [menuId]);

  return (
    <main>
      <MenuContext.Provider value={{ menu, setMenu }}>
      <Menus />
      </MenuContext.Provider>
    </main>
  );
}

export default ScreensDashboard;