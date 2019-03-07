const express = require('express');
const router = express.Router();
// const client = require("../db");
// const postList = require("../views/postList");
// const postDetails = require("../views/postDetails");
// const addPost = require("../views/addPost");
const {addPage }= require('../views/addPage')
const {Page }= require('../models')
// const main = require('../views/main')


router.get('/', (req, res, next) => {
    // res.send(main())
})
router.post('/', async (req, res, next) => {
    const page = new Page({
        title: 'hi',
        content: 'sup'
    }) 
    try {
        await page.save();
        res.redirect('/')
    } catch (error) {
        next(error)
    }
})
router.get('/add', (req, res, next) => {
    res.send(addPage())
})
module.exports = router