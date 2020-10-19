const { Router } = require('express')
const express = require('express')
const User = require('../../database/models/User')
const router = express.Router()
const Sequelize = require('sequelize')


//CREATE
router.post('/', async (req, res) => {
    try {
        const user = await User.create({ name: req.body.name, email: req.body.email, password: req.body.password, type: req.body.type })
        res.json(user)
    } catch (error) {
        console.error(error);
    }
})

//READ
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll()
        res.json(users)
    } catch (error) {
        console.error(error);
    }
})


//READ byid
router.get('/:id', async (req, res) => {
    try {
        const users = await User.findByPk(req.params.id)
        res.json(users)
    } catch (error) {
        console.error(error);
    }
})


//UPDATE
router.patch('/:id', async (req, res) => {
    try {
        const user = await User.update({ name: req.body.name, email: req.body.email, password: req.body.password, type: req.body.type }
            , { where: { id: req.params.id } })
        res.json(user)
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
        const user = await User.update({ deletedAt: date }
            , { where: { id: req.params.id } })
        res.json(user)
    } catch (error) {
        console.error(error);
    }
})



module.exports = router