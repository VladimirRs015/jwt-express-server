const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const app = express()
const dotenv = require("dotenv")

// config
dotenv.config({})
// routes
const AuthRoutes = require("./routes/auth/auth-routes")
const FavRoutes = require("./routes/favorites/fav-routes")

// middlewares
app.use(morgan("tiny"))

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use(
  cors({
    origin: "*",
  })
)
console.log(process.env.munyeyo)
app.use("/api/v1/", AuthRoutes)
app.use("/api/v1/", FavRoutes)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log("Server running on port ", PORT))
