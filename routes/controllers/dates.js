const router = require('express').Router()
const { Dates } = require('../../db')

router.get('/', async (req, res) => {
    const date = await Dates.findAll()
    res.json(date)
})

router.get('/:id', async (req, res) => {
    const date = await Dates.findAll({
        where: { user_id: req.params.id }
    })
    res.json(date)
})

router.put('/create', async (req, res) => {
    const date = await Dates.create(req.body)
    res.json(date)
})

// Este metodo funciona, pero no me trae la respuesta en el postman =(
router.put('/:id', async (req, res) => {
    await Dates.update(req.body, {
        where: { id: req.params.id }
    })
    req.json({ success: 'se ha editado correctamente' })
})

router.delete('/:id', async (req, res) => {
    await Dates.destroy({
        where: { id: req.params.id }
    })
    res.json({ success: 'cita medica eliminada correctamente!' })
})


module.exports = router