import React, { useEffect, useState, createContext } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../../services/apiClient';
import Button from '../../components/buttom';

export const MenuContext = React.createContext();

function ScreensDashboard () {
  const { menuId } = useParams();
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    async function getMenu () {
      const response = await apiClient.getMenu(menuId);
      let menu;
      if (response.ok) {
        menu = await response.json();
      } else {
        menu = [];
      }
      console.log(menu);
      setMenu(menu.menu);
    }
    getMenu();
  }, [menuId])
  return (
    <main>
      <MenuContext.Provider value={{ menu, setMenu }}>
        <Button />
        {menu[0] ? menu[0].name : null}
      </MenuContext.Provider>
    </main>
  );
}

export default ScreensDashboard;