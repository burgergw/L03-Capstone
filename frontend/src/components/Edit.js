//Importing required packages
import React, { useEffect, useState } from 'react';
import axios from 'axios';
//React functional arrow component to edit an item
const Edit = () => {

    //Creating state variables and setting to the current item information
    const [editItem, setEditItem] = useState('');
    const [newItem, setNewItem] = useState(editItem.item);
    const [newQuantity, setNewQuantity] = useState(editItem.quantity);
    const [newPrice, setNewPrice] = useState(editItem.price);
    //useEffect function to get the item information from the local storage
    useEffect(() => {
        const item = localStorage.getItem('item')
        const parsedItem = JSON.parse(item);
        setEditItem(parsedItem)

    }, [])
    //Function to sublit changes
    const submitChanges = (e) => {
        //Preventing the page from refreshing on burtton click
        e.preventDefault();
        //Axios put request to edit the item. The item id will be passed through the params of the request
        axios.put(`http://localhost:5150/edit/${editItem._id}`, {
          newItem: newItem,
          newQuantity: newQuantity,
          newPrice: newPrice
        })
        //Navigating the user back to the display page when changes are submitted
        window.location.href = '/display';
    }
    //Function to delete item
    const deleteItem = () => {
      //Axios delete request to delete item with the specified item id passed through the params of the request
      axios.delete(`http://localhost:5150/delete/${editItem._id}`)
      window.location.href = '/display';
    }
    //Rendering the edit form
    return (
    <div>
        <h1>Edit</h1>
        <form onSubmit={submitChanges}>
          <input type='text' placeholder={editItem.item} onChange={(e) => {setNewItem(e.target.value)}} />
          <input type='number' placeholder={editItem.quantity} onChange={(e) => {setNewQuantity(e.target.value)}}/>
          <input type='text' placeholder={editItem.price} onChange={(e) => {setNewPrice(e.target.value)}}/>
        <button type='submit'>Submit Changes</button>
        </form>
        <button onClick={deleteItem}>Delete item</button>
    </div>
  )
}
//Exporting functional component
export default Edit;