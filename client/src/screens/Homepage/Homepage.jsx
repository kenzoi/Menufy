import { Link } from 'react-router-dom';
import './Homepage.css';

function ScreensHomepage () {

  return (
  <main className="Homepage__main">
  <h1>Menufy</h1>
      <h2>Your uncomplicated digital restaurant menu for free</h2>
      <h2>Without advertises! Your page is your page!</h2>
      <h2>It's very easy and simple to start!</h2>
      <h3>Just sign up</h3>
      <h3>Receive your unique Link and QR Code on your email</h3>
      <h3>Start inserting categories and items directly from your phone!</h3>
      <h2>Your menu is ready!</h2>
      <h2><Link to="/signup">Sign up</Link></h2>
  </main>);
}

export default ScreensHomepage;