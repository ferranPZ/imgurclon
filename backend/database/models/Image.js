const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db')

class Images extends Model { }

Images.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    private: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 0 },
    deletedAt: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
    deletedAt: { type: DataTypes.DATE, defaultValue: null },

}, {
    timestamps: true,
    sequelize,
    modelName: 'images'
});

module.exports = Images