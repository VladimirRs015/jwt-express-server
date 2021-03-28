const Router = require("express").Router
const isAuth = require("../../middlewares/isAuth")
const { login } = require("./auth-controller")
const router = Router()

router.post("/login", login)

module.exports = router
