const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword(user) {
  const SALT_FACTOR = 8

  if (user.changed('password')) {
    if (!user.changed('password')) {
      return false
    }
    return bcrypt
      .genSaltAsync(SALT_FACTOR)
      .then(salt => bcrypt.hashSync(user.password, salt, null))
      .then((hash) => {
        user.setDataValue('password', hash)
      })
  }
  return false
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
  }, {
    hooks: {
      beforeCreate: hashPassword,
    },
  })

  User.prototype.comparePassword = function comparePassword(password) {
    return bcrypt.compareSync(password, this.password)
  }

  return User
}
