const express = require("express")
const router = express.Router()
const { Country, Place } = require("../models")

router.post('/', async (req,res) => {
    const { country, place, description } = req.body

    const countryResult = await Country.create({
        country
    })

    const placeResult = await Place.create({
        place,
        description,
        CountryId : countryResult.id
    })

    res.status(201).json(placeResult)
})

module.exports = router