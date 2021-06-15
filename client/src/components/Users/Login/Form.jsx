import './Form.css';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import apiClient from '../../../services/apiClient';
import { UserContext } from '../../../screens/Root/Root';

function UsersLoginForm () {
  const history = useHistory();
  const { logIn } = useContext(UserContext);

  async function handleSubmit (event) {
    event.preventDefault();
    const emailOrUsername = event.target[0].value;
    const onSubmitValues = { password: event.target[1].value };
    if (emailOrUsername.includes('@')) {
      onSubmitValues.email = emailOrUsername;
    } else {
      onSubmitValues.username = emailOrUsername;
    }
    const response = await apiClient.authUser(onSubmitValues);
    if (response.ok) {
      const data = await response.json();
      logIn(data);
      history.push(`/dashboard/${data._id}`)
    }
  }

  return (
    <>
      <form className="UsersLoginForm__form" onSubmit={handleSubmit}>
        <label htmlFor="email-or-username">Email or username</label>
        <input id="email-or-username" type="text" title="Your name" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password"/>
        <input type="submit" />
      </form>
    </>
  );
}

export default UsersLoginForm;