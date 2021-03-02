module.exports = (sequelize, type) => {
    return sequelize.define('dates', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: type.INTEGER,
        name: type.STRING,
        lastName: type.STRING,
        specialty: type.STRING,
        observations: type.STRING,
        status: type.STRING
    })
}