const mongoose = require('mongoose')
const { model } = require("mongoose");

const user = new mongoose.Schema({
  name: {type: String},
  email: {type: String, unique: true},
  image: {type:String}
})

module.exports = model('User', user)