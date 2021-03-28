const Router = require("express").Router
const isAuth = require("../../middlewares/isAuth")
const { addFav, removeFav, getFavs } = require("./fav-cotroller")

const router = Router()

router.get("/favs", isAuth, getFavs)

router.post("/favs", isAuth, addFav)

router.delete("/favs/:id", isAuth, removeFav)

module.exports = router
