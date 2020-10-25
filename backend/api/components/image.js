const { Router } = require('express')
const express = require('express')
const Image = require('../../database/models/Image')
const router = express.Router()
const Sequelize = require('sequelize')


//CREATE
router.post('/', async (req, res) => {
    try {
        const image = await Image.create({ title: req.body.title, description: req.body.description, private: req.body.private, postId: req.body.postId })
        res.json(image)
    } catch (error) {
        console.error(error);
    }
})

//READ
router.get('/', async (req, res) => {
    try {
        const image = await Image.findAll()
        res.json(image)
    } catch (error) {
        console.error(error);
    }
})


//READ byid
router.get('/:id', async (req, res) => {
    try {
        const image = await Image.findByPk(req.params.id)
        res.json(image)
    } catch (error) {
        console.error(error);
    }
})


//UPDATE
router.patch('/:id', async (req, res) => {
    try {
        const image = await Image.update({ title: req.body.title, description: req.body.description, private: req.body.private, idUser: req.body.idUser }
            , { where: { id: req.params.id } })
        res.json(image)
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
        const image = await Image.update({ deletedAt: date }
            , { where: { id: req.params.id } })
        res.json(image)
    } catch (error) {
        console.error(error);
    }
})



module.exports = router