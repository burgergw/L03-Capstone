//Importing required packages and css
import React, {  useState, useEffect } from 'react'
import axios from 'axios'
import StockItem from './StockItem';
import '../styles/adminDash.css';
//React arrow functional component to display the admin dashboard to the admin of the software
const AdminDash = () => {

    //Creating state variables to sore the items to be displayed
    const [dispItems, setDispItems] = useState([])
    //useEffect function to get the items from the packend when the page loads
    useEffect(() => {
        //Axios get request to get the items from the backend and set it to the state variables 
        axios.get('http://localhost:5150/items').then((response) => {
            setDispItems(response.data)
        })
    }, [])
    //Function that navigates the user to the 'Add Item' page 
    const add = () => {
        window.location.href = '/add';

    }
  /*Rendering the Admin dashboard with the items.
  Each item is rendered from an array with the map function. Each item rendered is a imported functional component that gets it's data from props passed in the admin dash component*/ 
  return (
    <div>
        <div className='map-container'>
           {dispItems.map((i) => {
            return (
                <div>
                <StockItem className='stock-item' key={i._id} item={i} />
                <br></br>
                </div>
            )
        })} 
        </div>
    <button onClick={add}>Add Item</button>
    </div>
  )
}
//Exporting functional component
export default AdminDash;