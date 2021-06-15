import './MenuForm.css';
import { useState, useContext } from 'react';
import apiClient from '../../../services/apiClient';
import { UserContext } from '../../../screens/Root/Root';
import { MenuContext } from '../../../screens/Dashboard/Dashboard.jsx';

function MenuForm () {
  const { user } = useContext(UserContext);
  const { setMenu } = useContext(MenuContext);
  const [name, setName] = useState('');

  async function handleSubmit (event) {
    event.preventDefault();
    const response = await apiClient.createSubMenu(user._id, name);
    if (response.ok) {
      const newMenu = await response.json();
      setMenu(menus => [...menus, newMenu]);
      setName('');
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} required />
        <input type="submit" value="Add" />
      </form>
    </>
  );
}

export default MenuForm;