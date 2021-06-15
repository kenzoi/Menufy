import './Groups.css';
import { useState, useContext } from 'react';
import { MenuContext } from '../../screens/Dashboard/Dashboard.jsx';
import Items from './Items/Items.jsx';

function Groups () {
  const { groups } = useContext(MenuContext);
  const groupsList = groups.map(group => (
    <div key={group._id}>
    <li>{group.name}</li>
      <Items items={group.items}/>
    </div>
  ));

  return (
    <>
      {groupsList}
    </>
  );
}

export default Groups;