import { useContext } from 'react';
import { MenuContext } from '../screens/Dashboard/Dashboard';
function Button () {
  const {menu, setMenu} = useContext(MenuContext);

  return (
    <>
    <button onClick={() => console.log(menu)}>click me</button>
      <button onClick={() => setMenu([])}>click me</button>
    </>
  );
}

export default Button;