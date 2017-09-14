const user = require('../models/user')
const jwt = require('jsonwebtoken')
const helper = require('../helpers/registration')
require('dotenv').config()

function getAllUser (req, res) {
  user.find()
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

function signup (req,res) {
  let salt = helper.random()
  let pass = helper.cryptoPass(req.body.password, salt)
  user.create({
    username: req.body.username,
    password: pass,
    salt: salt
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

function signin (req,res){
  user.findOne({
    username: req.body.username
  })
  .then(response => {
    let salt = response.salt
    let pass = helper.cryptoPass(req.body.password, salt)
    if(response.password == pass){
      let token = jwt.sign({
        id: response._id,
        username: response.username
      }, process.env.SECRET_KEY)
      let objectGabungan = {
        token: token,
        id: response._id,
        username: response.username
      }
      res.send(objectGabungan)
    } else {
      res.send('incorrect password!')
    }
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  getAllUser,
  signup,
  signin
}
