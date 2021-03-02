const Sequelize = require('sequelize')
const userModel = require('./models/users')
const datesModel = require('./models/dates')

const sequelize = new Sequelize('api_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

})

const User = userModel(sequelize, Sequelize)
const Dates = datesModel(sequelize, Sequelize)

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas')
    })

module.exports = {
    User,
    Dates
}