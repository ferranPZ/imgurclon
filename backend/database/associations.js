//Models
const User = require('./models/User')
const Post = require('./models/Post')
const Commentary = require('./models/Commentary')
const Image = require('./models/Image')
const Vote = require('./models/Vote')

//Post relationships
User.hasMany(Post, { as: 'publicacion', foreignKey: 'autorId' })
Post.belongsTo(User, { as: 'autor' })

//Commentary relationships
User.hasMany(Commentary)
Commentary.belongsTo(User)
Post.hasMany(Commentary)
Commentary.belongsTo(Post)

//Image relationships
Post.hasMany(Image)
Image.belongsTo(Post)

//Vote relationships
User.hasMany(Vote)
Vote.belongsTo(User)
Post.hasMany(Vote)
Vote.belongsTo(Post)
Commentary.hasMany(Vote)
Vote.belongsTo(Commentary)