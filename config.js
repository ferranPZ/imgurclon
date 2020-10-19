module.exports = {
    api:
    {
        PORT: process.env.PORT || 3000
    },
    database:
    {
        database: process.env.DATABASE || 'imgurdb',
        username: process.env.USERNAME || 'root',
        password: process.env.PASSWORD || '',
        host: process.env.HOST || 'localhost',
        dialect: 'mysql'
    }
}