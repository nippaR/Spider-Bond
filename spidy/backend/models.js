const mongoose = require('mongoose');

const LoginSchema = mongoose.Schema({
    username: {
        type: String,
       
    },
    password: {
        type: String,
        
    },
    email: {
        type: String,
       
    }
},
{
    timestamps: true
}

);


const Login = mongoose.model('Login', LoginSchema);

module.exports = Login;