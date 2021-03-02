const router = require('express').Router()

const apiUserRouter = require('./controllers/users')
const apiDatesRouter = require('./controllers/dates')

router.use('/users', apiUserRouter)
router.use('/dates', apiDatesRouter)

module.exports = router