import './AddButton.css';
import MenuForm from './MenuForm/MenuForm.jsx';
import GroupForm from './GroupForm/GroupForm.jsx';
import ItemForm from './ItemForm/ItemForm.jsx';
import { useState } from 'react';

function AddButton () {
  const [active, setActive] = useState(false);
  const [menuFormActive, setMenuFormActive] = useState(false);
  const [groupFormActive, setGroupFormActive] = useState(false);
  const [itemFormActive, setItemFormActive] = useState(false);

  return (
    <div className="AddButton__container">
      <button className="AddButton__button" onClick={() => setActive((p) => !p)}>Add</button>
      <nav className={`AddButton__panel--${active ? 'active' : 'inactive'}`}>
        <ul className="AddButton__panel__options">
          <li className="AddButton__panel__options__buttons" onClick={() => setMenuFormActive((p) => !p)}>Add Menu</li>
          {menuFormActive ? < MenuForm /> : null}
          <li className="AddButton__panel__options__buttons" onClick={() => setGroupFormActive((p) => !p)}>Add Group</li>
          {groupFormActive ? <GroupForm /> : null}
          <li className="AddButton__panel__options__buttons" onClick={() => setItemFormActive((p) => !p)}>Add Item</li>
          {itemFormActive ? <ItemForm /> : null}
          <li className="AddButton__panel__options__buttons AddButton__delete">Delete Menu</li>
        </ul>
      </nav>
    </div>
  );
}

export default AddButton;