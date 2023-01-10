//Importing required packages and css
import React, {  useState, useEffect } from 'react';
import axios from 'axios'
import '../styles/userDash.css';
//React functional arrow component to display information to the end user
const UserDash = () => {
  //Creating state variables
  const [dispItems, setDispItems] = useState([]);
  //useEffect function to get items from the backend when the page loads
  useEffect(() => {
    //Axios get request to get the items from the backend
    axios.get('http://localhost:5150/items').then((response) => {
        setDispItems(response.data)
    })
}, [])
  //Rendering the table that displays all the items to the user by mapping through the array and rendering table rows from each item in the array
  return (
    <div>
      <table>
        <tr>
          <td>Item</td>
          <td>Quantity available</td>
          <td>Price per unit</td>
        </tr>
        {dispItems.map((i) => {
            return (
              <tr>
                <td>{i.item}</td>
                <td>{i.quantity}</td>
                <td>R {i.price}</td>
              </tr>
            )
        })}
      </table>
    </div>
  )
}
//Exporting functional component 
export default UserDash;