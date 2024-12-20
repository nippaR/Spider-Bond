const mongoose = require('mongoose');

const LoginSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
},
{
    timestamps: true
}

);


const Login = mongoose.model('Login', LoginSchema);

module.exports = Login;