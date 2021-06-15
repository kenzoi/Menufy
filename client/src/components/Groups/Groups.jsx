import './Groups.css';
import { useContext } from 'react';
import { MenuContext } from '../../screens/Dashboard/Dashboard.jsx';
import Items from './Items/Items.jsx';

function Groups () {
  const { groups } = useContext(MenuContext);
  const groupsList = groups.map(group => (
    <div key={group._id}>
    <h3 className="Groups__title">{group.name}</h3>
      <Items items={group.items}/>
    </div>
  ));

  return (
    <div>
      {groupsList}
    </div>
  );
}

export default Groups;