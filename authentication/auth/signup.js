const express = require('express');
const router = express.Router();
const user = require('../models/model.js');
const bcrypt = require('bcrypt')
const saltRounds = 10
const signup =  function (req, res){

// const passW = req.body.password
const username = req.body.username
user.findOne({username})
  .then(user=>{
    if(user){
      console.log("user exist")
      return
    }else{
      const passW = req.body.passW
      bcrypt.hash(passW,saltRounds, function(err, password){
        const user = new user({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          username: req.body.username,
          passWord: password,
        });
          user.save((err)=>{
            if(err) throw err;
            res.send("user signedup")
          })
      })
    }
  })
}


router.post('/signup', signup);
module.exports = signup