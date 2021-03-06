module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        lastName: type.STRING,
        userName: type.STRING,
        password: type.STRING,
        typeUser: type.STRING
    })
}