const router = require('express').Router()
const { User } = require('../../db')
const { check, validationResult } = require('express-validator')
// var sequelize = require('sequelize')
// const { where } = require('sequelize')
// const { route } = require('../')


router.post('/register', [
    check('userName', 'Nombre de usuario obligatorio!').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
], async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array() })
    }

    const user = await User.create(req.body)
    res.json(user)
})

router.post('/login', async (req, res) => {
    const logged = await User.findOne({ where: { userName: req.body.userName } })
    if (logged) {
        res.json(logged)
    }
    else {
        res.json({ error: 'Error nombre de usuario o password incorrectos!' })
    }
})

router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

router.get('/:id', async (req, res) => {
    const user = await User.findAll({
        where: { id: req.params.id }
    })
    res.json(user)
})

router.post('/', async (req, res) => {
    const user = await User.create(req.body)
    res.json(user)
})

router.put('/:userId', async (req, res) => {
    await User.update(req.body, {
        where: { id: req.params.userId }
    })
    res.json({ success: 'Se ha modificado correctamente!' })
})

router.delete('/:userId', async (req, res) => {
    await User.destroy({
        where: { id: req.params.userId }
    })
    res.json({ succes: 'Se ha eliminado el usuario correctamente!' })
})

module.exports = router