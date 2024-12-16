const express = require('express');
const app = express();
const mongoose = require('mongoose');
const login = require('./models.js');

//middleware
app.use(express.json());


//routes
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});


//post request
app.post('/login',async(req,res) => {
    try {
        const login = await Login.create(req.body);
        return res.status(201).send(login);
    }catch(err) {
        return res.status(400).send({message:err});
    }
});




//connect to db
mongoose.connect("mongodb+srv://Thanuja46:thanu826@backenddb.tijrt.mongodb.net/Login_Details?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log('Connected to DB');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch((err) => {
    console.log('Connection Failed: ', err)
});








