//Requiring mongoose
const mongoose = require('mongoose');
//Creating a schema for the user database
let UserSchema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    admin: {
        type: Boolean,
        default: false
    }
})
//Exporting the user model
module.exports = mongoose.model("users", UserSchema);