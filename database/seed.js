const sequelize = require('../database/db');
const User = require('./models/User')
const Post = require('./models/Post')
const Commentary = require('./models/Commentary')
const Image = require('./models/Image')
const Vote = require('./models/Vote')
require('./associations');

// Usuarios
const users = [
    { name: "Anton", email: "azr@azr.es", password: 18, type: 1 },
    { name: "Pepe", email: "pepe@gmail.com", password: 38, type: 0 },
    { name: "Lucia", email: "lucia@hotmail.com", password: 88, type: 1 },
];



sequelize.sync({ force: false }).then(() => {
    // Conexión establecida
    console.log("Conexión establecida...");
}).then(() => {
    // Rellenar usuarios
    users.forEach(user => User.create(user));
}) //.then(() => {
//     // Rellenar direcciones
//     addresses.forEach(address => Address.create(address));
// }).then(() => {
//     // Rellenar posts
//     posts.forEach(post => Post.create(post));
// });