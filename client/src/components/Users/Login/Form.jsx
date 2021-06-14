import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import apiClient from '../../../services/apiClient';

function UsersLoginForm () {
  const [emailOrUsername, setemailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

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
      history.push(`/dashboard/${data._id}`)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email-or-username">Email or username:</label>
        <input id="email-or-username" type="text" title="Your name" value={emailOrUsername} onChange={e => setemailOrUsername(e.target.value)}/>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <input type="submit" />
      </form>
    </>
  );
}

export default UsersLoginForm;