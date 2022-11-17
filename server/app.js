const express = require("express")
const app = express()
const cors = require("cors")

const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")
const dotenv = require('dotenv')

// setting up of config file path
dotenv.config({ path: "config/config.env" })

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

// import all routes
const usersRouter = require("./routes/usersRouter.js")
const flightRouter = require("./routes/flightRouter.js")
const hotelRouter = require("./routes/hotelRouter.js")
const packageRouter = require("./routes/packageRouter.js")
const transferRouter = require("./routes/transferRouter.js")

app.use('/api/users', usersRouter)
app.use('/api/flight', flightRouter)
app.use('/api/hotels', hotelRouter)
app.use('/api/place', packageRouter)
app.use('/api/transfer', transferRouter)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


module.exports = app