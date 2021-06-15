import './ItemForm.css';
import _ from 'lodash';
import { useState, useContext } from 'react';
import apiClient from '../../../services/apiClient';
import { UserContext } from '../../../screens/Root/Root';
import { MenuContext } from '../../../screens/Dashboard/Dashboard.jsx';

function ItemForm () {
  const { user } = useContext(UserContext);
  const { setMenu, activeMenu, groups, setGroups } = useContext(MenuContext);
  const [name, setName] = useState('');
  const [selectGroup, setSelectGroup] = useState({ text: 'Select Group', active: false, _id: ''});
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  async function handleSubmit (event) {
    event.preventDefault();
    const response = await apiClient.createItem(user._id, activeMenu._id, selectGroup._id, name, description, value);
    if (response.ok) {
      const newItem = await response.json();
      console.log(newItem);
      setMenu(menu => {
        const newMenu = _.cloneDeep(menu);
         return newMenu.map(subMenu => {
          if (subMenu._id === activeMenu._id) {
            subMenu.groups.map(group => {
              if (group._id === selectGroup._id) {
                group.items.push(newItem);
              }
              return group;
            });
            setGroups(subMenu.groups);
          }
          return subMenu;
        });
      })

    }
  }

  const renderedGroups = groups.map(group => <li key={group._id} onClick={() => setSelectGroup(p => ({active: false, text: group.name, _id: group._id }))}>{group.name}</li>);

  return (
    <>
      <button onClick={() => setSelectGroup((p) => ({ ...p, active: !p.active }))}>{selectGroup.text}</button>
      <nav className={`ItemForm__select-group--${selectGroup.active ? 'active' : 'inactive'}`}>
        <ul>
          {renderedGroups}
        </ul>
      </nav>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} required />
        <label htmlFor="description">Description:</label>
        <input id="description" type="text" value={description} onChange={e => setDescription(e.target.value)} required />
        <label htmlFor="value">Value:</label>
        <input id="value" type="text" value={value} onChange={e => setValue(e.target.value)} required />
        <input type="submit" value="Add" />
      </form>
    </>
  );
}

export default ItemForm;