//Importing required packages and css
import React from 'react'
import '../styles/SideNav.css'
//React functional arrow component of the side nav bar
const SideNav = () => {
  //Rendering the navbar component with links to the login and register page
  return (
    <nav>
    <ul>
      <li>
        <a href="/login">Login</a>
      </li>
      <li>
        <a href="/register">Register</a>
      </li>
    </ul>
  </nav>
  )
}
//Exporting functional component
export default SideNav;