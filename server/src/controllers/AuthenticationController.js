const { User } = require('../models')

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.',
      })
    }
  },
  async login(req, res) {
    try {
      const { email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email,
        },
      })
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.',
      })
    }
  }
}
