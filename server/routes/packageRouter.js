const express = require("express")
const router = express.Router()
const { Country, Place } = require("../models")

router.post('/', async (req,res) => {
    const { country, place, description } = req.body

    const isExist = await Country.findOne({ where: { country: country } })

    if(!isExist) {
        const countryResult = await Country.create({
            country
        })
    
        const placeResult1 = await Place.create({
            place,
            description,
            CountryId : countryResult.id
        })
    
        res.status(201).json(placeResult1)
    } else {
        const placeResult2 = await Place.create({
            place,
            description,
            CountryId : isExist.id
        })
    
        res.status(201).json(placeResult2)
    }
})

module.exports = router