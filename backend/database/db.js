const { Sequelize } = require('sequelize')
const { database } = require('../config')

const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password,

    {
        host: database.host,
        dialect: database.dialect,
        dialectOptions: {
            useUTC: true //for reading from database
        },
    },

)

module.exports = sequelize