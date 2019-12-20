const express = require('express');
const router = express.Router();

const login = async function (req, res) { // export default login = async (req,res) => {}
    // const DB = req.app.locals.DB;
    // // const db = DB.collection("user");
    // console.log(db)
    
    // const {username, password} = req.body;

    // DB.collection("user").findOne({
    //     username
    // }, async (err) => {
    //     if (err) {
    //         console.log(err)
    //         await res.send("no user")
    //     } else if (username === 'Naresh') {
    //         await res.send("loggedin")
    //     } else {
    //         res.send("No User Found")
    //     }
    // })
    // User.findOne({username})
    // .then(response => console.log('response', response))
    // .catch(err => {
    //         console.log('err', err)
    // })

}

// router.post('/:id', login);
router.post('/login', login);
module.exports = login;
