const bodyParser = require("body-parser")
const express = require('express'); 

const login = require("./auth/login")
const signup = require("./auth/signup")
 
const app = express()

app.login("/",login)

app.signup("/signup",signup)



export default module