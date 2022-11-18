const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js")
const { Airports, Country, Place, Transfers } = require('../models')


// create airports for super admins => /api/transfer/admin/airports/create
exports.createAirports = catchAsyncErrors( async (req,res,next) => {
    const { iata, name, country } = req.body

    const { id } = await Country.findOne({ where: { country: country } })

    const airports = await Airports.create({
        iata,
        name,
        country,
        CountryId: id
    })

    res.status(201).json({
        success: true,
        airports
    })
})

// get all airports for super admin => /api/transfer/admin/airports/all
exports.allAirports = catchAsyncErrors(async(req,res,next) => {

    const airports = await Airports.findAll()

    res.status(200).json({
        success:true,
        airports
    })
})

// create transfers table  for superadmin => /api/transfers/admin/create
exports.createTransfers = catchAsyncErrors( async(req,res,next) => {
    const { airportIata, placeName, transferName, private, shared } = req.body

    const airport = await Airports.findOne({ where: { iata: airportIata } }) 
    const place = await Place.findOne({ where: { place: placeName } }) 

    const isExist = await Transfers.findOne({
        where: {
            AirportId: airport.id,
            PlaceId: place.id
        }
    })
    // identifying the combination exist or not
    if(!isExist) {
        const transfer = await Transfers.create({
            transfer: transferName,
            private,
            shared,
            AirportId: airport.id,
            PlaceId: place.id
        })
    
        res.status(201).json({
            success: true,
            transfer
        })
    }
        
    res.status(400).json({
        success: false,
        alert: "This combination already exist"
    })
    

})
// transfer for user => /api/transfers/
exports.transfer = catchAsyncErrors( async(req,res,next) => {
    const { airportIata, placeName } = req.body

    const airport = await Airports.findOne({ where: { iata: airportIata } }) 
    const place = await Place.findOne({ where: { place: placeName } }) 

    const transfer = await Transfers.findOne({
        where: {
            AirportId: airport.id,
            PlaceId: place.id
        }
    })

    res.status(201).json({
        success: true,
        transfer
    })
})

// transfer enquiry fpr users => /api/transfer/enquiry
exports.enquiry =  catchAsyncErrors( async(req,res,next) => {
    const { people, airportIata, placeName, transferStatus, returnStatus } = req.body

    const airport = await Airports.findOne({ where: { iata: airportIata } }) 
    const place = await Place.findOne({ where: { place: placeName } }) 

    const transfer = await Transfers.findOne({
        where: {
            AirportId: airport.id,
            PlaceId: place.id
        }
    })
    let amount = 0
    // amounts distributed as per number of peoples 
    if(transferStatus === "private") {
        if(people > 4 && people < 9 ) {
            amount = (transfer.private * 2) / people
        } else {
            amount = transfer.private / people
        }
    } else {
        amount = transfer.shared * people
    }

    // if the user asked for the return travel
    if (returnStatus === true) {
        amount *= 2
    }

    res.status(200).json({
        success: true,
        transfer,
        amountPerPerson: amount
    })
})