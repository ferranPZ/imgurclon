const { Router } = require('express')
const express = require('express')
const Post = require('../../database/models/Post')
const Image = require('../../database/models/Image')

const router = express.Router()
const Sequelize = require('sequelize')
const { _attributes } = require('../../database/db')


var multer = require('multer')
const upload = multer({ dest: 'public/images' })

//CREATE
router.post('/', upload.single('picture'), async (req, res) => {
    try {
        console.log(req.file)
        const post = await Post.create({
            title: req.body.title, description: req.body.description, private: req.body.private, autorId: req.body.autorId, images: [{
                title: req.body.imgTitle, description: req.file.filename, private: 0
            }]
        },
            {
                include: "images"
            })
        res.json(post)
    } catch (error) {
        console.error(error);
    }
})

//READ
router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: {
                model: Image,
                attributes: ['title', 'description']
            }
        })
        res.json(posts)
    } catch (error) {
        console.error(error);
    }
})


//READ byid
router.get('/:id', async (req, res) => {
    try {
        const posts = await Post.findByPk(req.params.id)
        res.json(posts)
    } catch (error) {
        console.error(error);
    }
})


//UPDATE
router.patch('/:id', async (req, res) => {
    try {
        const post = await Post.update({ title: req.body.title, description: req.body.description, private: req.body.private, idUser: req.body.idUser }
            , { where: { id: req.params.id } })
        res.json(post)
    } catch (error) {
        console.error(error);
    }
})

//DELETE
router.delete('/:id', async (req, res) => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + 'T' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(date);
    try {
        const post = await Post.update({ deletedAt: date }
            , { where: { id: req.params.id } })
        res.json(post)
    } catch (error) {
        console.error(error);
    }
})



module.exports = router