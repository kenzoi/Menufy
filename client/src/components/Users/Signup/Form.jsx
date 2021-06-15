import './Form.css';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import apiClient from '../../../services/apiClient';
import { UserContext } from '../../../screens/Root/Root';

function UsersSignupForm () {
  const history = useHistory();
  const { logIn } = useContext(UserContext);

  async function handleSubmit (event) {
    event.preventDefault();
    const onSubmitValues = {
      username: event.target[0].value,
      email: event.target[1].value,
      restaurantName: event.target[2].value,
      password: event.target[3].value
    }
    const response = await apiClient.createUser(onSubmitValues);
    if (response.ok) {
      const data = await response.json();
      logIn(data);
      history.push(`/dashboard/${data._id}`)
    }
  }

  return (
    <>
      <form className="UsersSignupForm__form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" title="Your name" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="restaurant-name">Restaurant Name</label>
        <input id="restaurant-name" type="text" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <input type="submit" />
      </form>
    </>
  );
}

export default UsersSignupForm;