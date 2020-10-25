//Routes
const User = require('../api/components/user')
const Post = require('../api/components/post')
const Image = require('../api/components/image')



const routes = function (server) {
    server.use('/api/users', User)
    server.use('/api/posts', Post)
    server.use('/api/images', Image)
}

module.exports = routes