//Routes
const User = require('../api/components/user')


const routes = function (server) {
    server.use('/api/users', User)
}

module.exports = routes