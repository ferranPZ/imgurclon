const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db')

class User extends Model { }

User.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    deletedAt: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
    verification: { type: DataTypes.STRING, allowNull: true },
}, {
    timestamps: true,
    sequelize,
    modelName: 'user'
});

module.exports = User