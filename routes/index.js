//Importing required packages and middleware
const express = require('express');
const router = express.Router(); 
const mongoose = require('mongoose');
const jwt =require('jsonwebtoken');
const StockModel = require('../models/stock.model');
const UserModel = require('../models/users.model')
//Variable to store the jwt signature
const secret = 'jwt-secret-string';
//Connecting to mongo database
mongoose.connect('mongodb+srv://user1:user1@cluster0.z6x6vwx.mongodb.net/stock?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
//Assigning connection to a variable
const db = mongoose.connection;
//Database error handling
db.on('error', console.log)
//Request to test connection
router.get('/api', (req, res) => {
    res.send('ok');
})
//Post request to register a new user
router.post('/register', async (req, res) => {
    //Getting the new user information from the body of the request
    const userName = req.body.userName;
    const password = req.body.password;
    const admin = req.body.admin;
    //Creating a new user to store in the database
    const newUser = new UserModel({
        username: userName,
        password: password,
        admin: admin
    })
    //Try block to save the new user to the database
    try {
        await newUser.save();
        res.json({
            message: "New user added"
        })
    } catch(err) {
        console.log(err);
    }
})
//Post request to login a user
router.post('/login', async (req, res) => {
    //Getting the login information from the body of the request
    const userName = req.body.username;
    const password = req.body.password;
    var admin = false;
    //If the admin logs in, the admin attribute will be set to true to search the database for the admin user
    if (userName ==='admin') {
        admin = true;
    } else {
        admin = false;
    }
    //Finding user in the database
    const user = await UserModel.findOne({
        username: userName,
        password: password,
        admin: admin
    })
    //If user is found, a jwt token will be generated and sent in the response.
    if(user) {
        const token = jwt.sign({
            username: user.username,
            password: user.password,
            admin: user.admin
        }, secret, {algorithm: 'HS256'})
        return res.json({status: 'ok', token: token})
    }
    console.log(userName, password, admin)
})
//Post request to verify token
router.post('/verify/:token', async (req, res) => {
    //Getting the token from the body of the request
    const token = req.params.token
    //Decoding the token
    const decoded = jwt.verify(token, secret)
    //Returning the information from the decoded token
    return res.json(decoded)
})
//GEt request to send all the items in the database to the frontend
router.get('/items', async (req, res) => {
    //Finding all the istems in the database
    const items = await StockModel.find({})
    //Returning the items in the response 
    return res.json(items)
})
//Post request to add a new item
router.post('/additem', async (req, res) => {
    //Getting the information of the new item from the body of the request
    const item = req.body.item;
    const quantity = req.body.quantity;
    const price = req.body.price;
    //Creating new item to store in database
    const newItem = new StockModel({
        item: item,
        quantity: quantity,
        price: price
    })
    //Try block to save the new item to the database
    try {
        await newItem.save();
        res.json({
            message: "New item added"
        })
    } catch(err) {
        console.log(err);
    }
})
//Delete request to delete an item from the data base
router.delete('/delete/:id', async (req, res) => {
    //Getting the id of the item from the params of the request
    const id = req.params.id;
    //Finding and removing item with matching id
    await StockModel.findByIdAndRemove(id).exec();
    res.send('Deleted')
})
//Put request to edit items
router.put('/edit/:id', async (req, res) => {
    //Getting the updated information from the body of the request
    const newItem = req.body.newItem;
    const newQuantity = req.body.newQuantity;
    const newPrice = req.body.newPrice;
    //GEtting the item id from the params of the request
    const id = req.params.id;
    //Try block to find and update the edited item in the database
    try {
        await StockModel.findById(id, (err, updatedItem) => {
            //Updating fields
            updatedItem.item = newItem;
            updatedItem.quantity = newQuantity;
            updatedItem.price = newPrice;
            //Saving updated item
            updatedItem.save();
            res.send('Updated');
        })
    } catch(err) {
        console.log(err)
    }
    
})
//Exporting router module
module.exports = router;