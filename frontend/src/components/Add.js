//Importing required packages
import React, {  useState } from 'react';
import axios from 'axios';
//React arrow functional component that displays a form for the user to add a new item to the database
const Add = () => {
    //Creating state variables
    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState(0);
    const [newPrice, setNewPrice] = useState(0);
    //Function to handle adding item to database
    const addItem = (e) => {
        //Preventing the page from refreshing on button click
        e.preventDefault();
        //Axios post request to send new item to the backend
        axios.post('http://localhost:5150/additem', {
            item: newItem,
            quantity: newQuantity,
            price: newPrice
        }).then((response) =>{
            console.log('Added')
        })
        //Navigating the user back to the display page after adding a new item
        window.location.href = '/display';
    } 
  //Rendering the form to add a new item   
  return (
    <div>
        <h1>Add new item</h1>
        <form onSubmit={addItem}>
          <input type='text' placeholder='Enter Item...' onChange={(e) => {setNewItem(e.target.value)}} />
          <input type='number' placeholder='Enter quantity...' onChange={(e) => {setNewQuantity(e.target.value)}}/>
          <input type='text' placeholder='Enter price per item...' onChange={(e) => {setNewPrice(e.target.value)}}/>
        <button type='submit'>Add Item</button>
        </form>
    </div>
  )
}
//Exporting functional component
export default Add;