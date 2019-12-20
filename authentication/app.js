const express = require('express');
const mongoose = require('mongoose');
const app = express()

const bodyParser = require("body-parser")

const login = require("./auth/login")
const signup = require("./auth/signup")


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

DB_URL = 'mongodb://127.0.0.1:27017/';
const mongoDB = DB_URL;
mongoose.connect(mongoDB, {useNewUrlParser:true, useUnifiedTopology: true})
.then( () =>console.log("connection established"))
.catch(err=>console.log(err,"db connection err"))

app.use('/login', login);
app.use("/signup", signup)


app.listen(8080);
console.log("running")
