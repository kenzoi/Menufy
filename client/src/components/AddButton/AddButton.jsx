import './AddButton.css';
import MenuForm from './MenuForm/MenuForm.jsx';
import { useState } from 'react';

function AddButton () {
  const [active, setActive] = useState(false);
  const [menuFormActive, setMenuFormActive] = useState(false);

  return (
    <>
      <button onClick={() => setActive((p) => !p)}>Add</button>
      <nav className={`AddButton__panel--${active ? 'active' : 'inactive'}`}>
        <ul>
          <li onClick={() => setMenuFormActive((p) => !p)}>Add Menu</li>
          {menuFormActive ? < MenuForm /> : null}
          <li>Add Group</li>
          <li>Add Item</li>
        </ul>
      </nav>
    </>
  );
}

export default AddButton;