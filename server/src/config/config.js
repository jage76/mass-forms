module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'massforms',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Anthony76!',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost',
      port: 3306
    }
  }
}
