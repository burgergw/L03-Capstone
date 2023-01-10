//Importing required packages, components and css
import React, {  useState, useEffect } from 'react';
import axios from 'axios';
import UserDash from './UserDash';
import AdminDash from './AdminDash';
import '../styles/display.css';
//React functional arrow component to either display the admin dashboard or the user dashboard
const Display = () => {
    //Creating state variables
    const [user, setUser] = useState({})
    //useEffect function to get user data from local storage when the page is loaded
    useEffect(() => {
        const token =localStorage.getItem('token')
        axios.post(`http://localhost:5150/verify/${token}`).then((response) => {
            setUser(response.data)
        })
    }, [])
    //If the admin is signed in, the admin attribute of the user object will be equal to true. If true, the admin dashboard will be displayed
    if (user.admin === true) {
        return (
    <div>
        <div className='dash-hdg'>Admin Dashboard</div>
        <AdminDash />
    </div>
  )
    //If the user attribute is NOT equal to true, the user dashboard will be displayed
    } else {
        return (
            <div>
                <div className='dash-hdg-user'>User Display</div>
                <UserDash />
            </div>
        )
    }
}
//Exporting functional component
export default Display;