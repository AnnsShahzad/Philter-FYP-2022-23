const mongoose = require('mongoose');
const express = require('express');
const app =  express();



const DB = 'mongodb+srv://annsk:Dude4200@philterproducts.ylzszwn.mongodb.net/Philter?retryWrites=true&w=majority'



mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Successfull");
}).catch((err) => console.log("Connection Failed... "));

app.get('/', (req,res) => {
    res.send(`Hello World From Server on HomePage.`)
});

app.get('/addProduct', (req,res) => {
    res.send(`Hello World From Server on addProduct.`)
});

app.get('/addDistributor', (req,res) => {
    res.send(`Hello World From Server on addDistributor.`)
});

app.listen(4000, () => {
    console.log("Server is Running at port 4000.");
})

