import { useEffect, useState, createContext, useContext } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../../services/apiClient';
import Button from '../../components/buttom';
import { UserContext } from '../Root/Root';

export const MenuContext = createContext();

function ScreensDashboard () {
  const { user } = useContext(UserContext);
  const { menuId } = useParams();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function getMenu () {
      const response = await apiClient.getMenu(menuId);
      let menu;
      if (response.ok) {
        const { menu } = await response.json();

      }
    }
    getMenu();
  }, [menuId]);

  return (
    <main>
      <MenuContext.Provider value={{ menu, setMenu }}>
        <Button />

      </MenuContext.Provider>
    </main>
  );
}

export default ScreensDashboard;