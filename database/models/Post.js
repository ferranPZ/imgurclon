const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db')

class Post extends Model { }

Post.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    private: { type: DataTypes.BOOLEAN, allowNull: false },
    deletedAt: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
}, {
    timestamps: true,
    sequelize,
    modelName: 'post'
});

module.exports = Post