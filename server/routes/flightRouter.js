const express = require("express")
const router = express.Router()
const { flightBooking, totalFlightBookings } = require("../controllers/flightControllers")


router.route("/book").post(flightBooking)
router.route("/book/total").get(totalFlightBookings)


module.exports = router