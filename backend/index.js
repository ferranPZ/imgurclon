//Dependences
const express = require('express')
var cors = require('cors');

//Assets
const { api } = require('./config')
const routes = require('./network/routes')
const sequelize = require('./database/db')
require('./database/associations')

const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use('/static', express.static('public'));

routes(app)

app.listen(api.PORT, () => {
    console.log('La app esta corriendo http://localhost:' + api.PORT);

    sequelize.sync({ force: false })
        .then(() => {
            console.log("Conectado a la Base de datos");
        })
        .catch((err) => {
            console.error(err);
        })
})