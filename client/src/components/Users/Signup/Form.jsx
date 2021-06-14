import { useState } from 'react';

function UsersSignupForm () {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit (event) {
    event.preventDefault();
    const onSubmitUsername = event.target[0].value;
    const onSubmitEmail = event.target[1].value;
    const onSubmitRestaurantName = event.target[2].value;
    const onSubmitPassword = event.target[3].value;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" title="Your name" value={username} onChange={e => setUsername(e.target.value)}/>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <label htmlFor="restaurant-name">Restaurant Name:</label>
        <input id="restaurant-name" type="text" value={restaurantName} onChange={e => setRestaurantName(e.target.value)}/>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <input type="submit" />
      </form>
    </>
  );
}

export default UsersSignupForm;