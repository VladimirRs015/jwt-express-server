const jwt = require("jsonwebtoken")
const users = require("./users")

const secret = process.env.token_secret || ""

const login = (req, res) => {
  const { email, password } = req.body
  const foundUser = users.find((user) => user.email === email)
  if (foundUser) {
    return foundUser.password === password
      ? res.status(200).json({
          jwt: jwt.sign(
            {
              role: foundUser.role,
              email: foundUser.email,
            },
            secret
          ),
        })
      : res.sendStatus(401)
  }
  res.sendStatus(403)
}

const logout = (req, res) => {}

module.exports = {
  login,
  logout,
}
