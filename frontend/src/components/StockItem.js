//Importing required packages and css
import React from 'react'
import '../styles/stockItem.css';
//React arrow functional component to render the item information
const StockItem = (props) => {
    //Function to handle click when edit item button is clicked
    const edit = () => {
        //Converting object to string
        const item = JSON.stringify(props.item)
        //Storing item to be edited in local storage
        localStorage.setItem('item', item);
        //Navigating the user to the edit page when edit item button is clicked
        window.location.href = '/edit';
    }
  //Rendering the item component  
  return (
    <div className='stock-item'>
      <h1 className='item'>Item: </h1>
      <h1 className='item'>{props.item.item}</h1>
      <h1 className='quantity'>Quantity: </h1>
      <h1 className='quantity'>{props.item.quantity}</h1>
      <h1 className='price'>Price per unit: </h1>
      <h1 className='price'>R {props.item.price}</h1>
      <button className='edit' onClick={edit}>Edit Item</button>
    </div>
  )
}
//Exporting functional component
export default StockItem;