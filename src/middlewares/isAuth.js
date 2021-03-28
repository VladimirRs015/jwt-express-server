const jwt = require("jsonwebtoken")

const secret = process.env.token_secret

const isAuthencated = (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    return res.status(403)
  }
  jwt.verify(token, secret, (error, user) => {
    if (error || !user) {
      next(false)
      return res.status(403)
    }
    req.user = user
    next()
  })
}
module.exports = isAuthencated
