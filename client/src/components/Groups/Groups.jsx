import './Groups.css';
import { useState, useContext } from 'react';
import { MenuContext } from '../../screens/Dashboard/Dashboard.jsx';

function Groups () {
  const { groups } = useContext(MenuContext);
  const groupsList = groups.map(group => <li>{group.name}</li>);

  return (
    <ul>
      {groupsList}
    </ul>
  );
}

export default Groups;