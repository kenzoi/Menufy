import './Groups.css';
import { useState, useContext } from 'react';
import { MenuContext } from '../../screens/Dashboard/Dashboard.jsx';
import Items from './Items/Items.jsx';

function Groups () {
  const { groups } = useContext(MenuContext);
  const groupsList = groups.map(group => (
    <>
    <li>{group.name}</li>
      <Items items={group.items}/>
    </>
  ));

  return (
    <ul>
      {groupsList}
    </ul>
  );
}

export default Groups;