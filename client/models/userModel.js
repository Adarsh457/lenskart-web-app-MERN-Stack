const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type:String,
        required:true,
        minLength:[4,'Name should be minimum of 4 characters']
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    phoneNumber:{
        type:Number,
        required:true,
        validate: {
            validator: v => /^\d{10}$/.test(v),
            message: 'Phone number must be exactly 10 digits'
        }
    },
    password:{
        type:String,
        required:true,
        minLength:[8,'Password should be minimum of 8 characters']
    }
}, {timestamps:true})

module.exports = mongoose.model('user', userSchema)