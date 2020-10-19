const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db')

class Commentary extends Model { }

Commentary.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    commentary: { type: DataTypes.STRING, allowNull: false },
    deletedAt: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
}, {
    timestamps: true,
    sequelize,
    modelName: 'commentary'
});

module.exports = Commentary