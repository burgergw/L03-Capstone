//Requiring mongoose
const mongoose = require('mongoose');
//Creating schema for the stock database
let StockSchema = mongoose.Schema({
    item: {
        type: String
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    }
})
//Exporting the items model
module.exports = mongoose.model("items", StockSchema);