import './GroupForm.css';
import _ from 'lodash';
import { useState, useContext } from 'react';
import apiClient from '../../../services/apiClient';
import { UserContext } from '../../../screens/Root/Root';
import { MenuContext } from '../../../screens/Dashboard/Dashboard.jsx';

function GroupForm () {
  const { user } = useContext(UserContext);
  const { activeMenu, setMenu, setGroups } = useContext(MenuContext);
  const [name, setName] = useState('');

  async function handleSubmit (event) {
    event.preventDefault();
    console.log(name);
    const response = await apiClient.createGroup(user._id, activeMenu._id, name); // need to pass current submenuId
    if (response.ok) {
      const newGroup = await response.json();
      setGroups(groups => [...groups, newGroup]);
      setMenu(subMenus => {
        let newSubMenus = _.cloneDeep(subMenus);
        return newSubMenus.map(subMenu => {
          if (subMenu._id === activeMenu._id) subMenu.groups.push(newGroup);
          return subMenu;
        });
      });
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

export default GroupForm;