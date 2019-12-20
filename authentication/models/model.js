 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
    firstName: {type: String, required: true},
    lastName:{ type: String, require:true },
    userName:{ type: String, require:true},
    passWord:{ type: String, require: true }
});

const user = mongoose.model('user', schema);
module.exports = user