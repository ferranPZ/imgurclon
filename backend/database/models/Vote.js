const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db')

class Vote extends Model { }

Vote.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
}, {
    timestamps: false,
    sequelize,
    modelName: 'votes'
});

module.exports = Vote