const express = require('express')
const router = express.Router()
const articleController = require('../controller/articleController')

// routing for article
router.get('/', articleController.findAllArticle)
router.post('/', articleController.createArticle)
router.get('/:id', articleController.findByIdArticle)
router.put('/:id', articleController.updateArticle)
router.delete('/:id', articleController.deleteArticle)

// routing to filter
router.get('/author/:author', articleController.getByAuthor)
router.get('/category/:category', articleController.getByCategory)

module.exports = router;
