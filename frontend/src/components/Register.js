//Importing required packages
import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
//React functional arrow component to handle the registration of a new user
const Register = () => {
    //Creating state variables
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    //Function to handle the adding of a new user
    const addUser = (e) => {
        //Preventing refresh of the page on button click
        e.preventDefault();
        //Navigating the user to the login page when registered
        window.location.href = '/login';
        //Axios post request to send the registration info to the backend
        Axios.post('http://localhost:5150/register', {
            userName: userName,
            password: password,
            admin: false
        })
    }
  //Rendering the register form  
  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={e => addUser(e)}>
            <input type="username" placeholder='Enter Username...' onChange={e => setUserName(e.target.value)}/>
            <input type="password" placeholder='Enter Password...' onChange={e => setPassword(e.target.value)}/>
            <button type='submit'>Register User</button>
        </form>
    </div>
  )
}
//Exporting functional component
export default Register;