const express = require('express');
const router = express.Router();
const test = async (req, res) => {
    const {data} = req.body;
    console.log('data', data)
    res.send("data")
}

router.post('/test', test);
module.exports = test;
