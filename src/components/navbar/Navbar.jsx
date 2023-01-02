import React from 'react'
import  "./navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      {/* <img src="src/assets/849-8494737_xbox-360-logo-transparent-cool-black-ops-4.png" alt="logo" /> */}
      ProGame
      </div>
      <div className="search">
        <input type="text" placeholder='Type Something' />
      </div>
      <div className="navlist">
        <li>Home</li>
        <li>Browse</li>
        <li>Details</li>
        <li>Streams</li>
      </div>
      <div className="profile">P</div>
    </nav>
  );
}

export default Navbar
