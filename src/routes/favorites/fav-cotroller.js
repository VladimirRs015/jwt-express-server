const favs = require("../auth/users")

const getFavs = (req, res) => {
  res.status(200).json(favs)
}

const addFav = (req, res) => {
  const { favid } = req.body
  favs.push(favid)
  res.status(201).json({ favs })
}

const removeFav = (req, res) => {
  const { id: favid } = req.params

  const favIndex = favs.findIndex((fav) => fav === favid)

  if (favIndex != -1) {
    favs.splice(favIndex, 1)
    return res.status(200).json({ favs })
  }
  res.sendStatus(404)
}

module.exports = { getFavs, addFav, removeFav }
