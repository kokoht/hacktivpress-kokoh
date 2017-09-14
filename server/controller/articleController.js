const article = require('../models/article')

function findAllArticle (req,res) {
  article.find()
  .populate('author', '_id username')
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

function findByIdArticle (req, res) {
  article.findOne({
    _id: req.params.id
  })
  .populate('author')
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

function createArticle (req, res) {
  article.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.body.author
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

function updateArticle (req, res) {
  article.where({
    _id: req.params.id
  })
  .update({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

function deleteArticle (req, res) {
  article.deleteOne({
    _id: req.params.id
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

function getByAuthor (req, res) {
  article.find({
    author: req.params.author
    // ok done.. pake ID author!
  })
  .populate('author', 'username')
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

function getByCategory (req, res) {
  article.find({
    category: req.params.category
  })
  .populate('author', 'username')
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  getByCategory,
  getByAuthor,
  deleteArticle,
  updateArticle,
  createArticle,
  findByIdArticle,
  findAllArticle
}
