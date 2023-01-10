//Importing the required packages
import React from 'react'
import { useState } from 'react';
//React functional arrow component to handle user login
const Login = () => {
    //Creating state variables
    const [logUsername, setLogUsername] = useState('');
    const [logPassword, setLogPassword] = useState('');
    const [logAdmin, setLogAdmin] = useState();

    const login = async (e) => {
        //Function to handle user login
        e.preventDefault();
        //Post request to send the login info to the backend
        const response = await fetch('http://localhost:5150/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: logUsername,
                password: logPassword
            })
        })
        //Creating object from response
        const data = await response.json()
        //Check if a token is returned
        if (data.token) {
            //Storing the returned token in local storage
            localStorage.setItem('token', data.token);
            //Navigating user to the display page when logged in
            window.location.href = '/display';
          //If no token is returned, login will be unsuccessful  
        } else {
            console.log('Login Unsuccessful')
        }
        
    }
  //Rendering the login form  
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={login}>
            <input type='username' placeholder='Enter username...' value={logUsername} onChange={e => setLogUsername(e.target.value)}/>
            <input type='password' placeholder='Enter password...' value={logPassword} onChange={e => setLogPassword(e.target.value)}/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
//Exporting functional component
export default Login;