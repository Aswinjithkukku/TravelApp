const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js")
const { Hotels, HotelDetails, Room_type, Hotel_prices,Booking, Booking_summary,Place } = require("../models")



//for super admin => /api/hotels/admin/all
exports.getHotels = catchAsyncErrors(async (req,res,next) => {

    const hotels = await Hotels.findAll()

    res.status(200).json({
        success:true,
        hotels
    })
})

// for super admin => /api/hotels/admin/create
exports.createHotel = catchAsyncErrors (async(req,res,next) => {

    const { place, name, description, phone, email, address, hotel_type } = req.body.hotel

    const placeName = await Place.findOne({ where: {place: place}})

    const hotels = await Hotels.create({
        name,
        description,
        phone,
        email,
        address,
        hotel_type,
        PlaceId: placeName.id
    })
    const { fromDate, toDate, checkinTime, checkoutTime, oneBr, twoBr, threeBr, sixBr, eightBr} = req.body.hoteldetails
    const details = await HotelDetails.create({
        fromDate,
        toDate,
        checkinTime,
        checkoutTime,
        oneBr,
        twoBr,
        threeBr,
        sixBr,
        eightBr,
        HotelId: hotels.id
    })

    res.status(201).json({
        success: true,
        hotels,
        details
    })

})

// for super admin => /api/hotels/admin/update
exports.updateHotel = catchAsyncErrors( async(req, res, next) => {
    
    const params = req.params.id

    const newHotelDetails = {
        fromDate: req.body.fromDate,
        toDate: req.body.toDate,
        checkinTime: req.body.checkinTime,
        checkoutTime: req.body.checkoutTime,
        oneBr: req.body.oneBr,
        twoBr: req.body.twoBr,
        threeBr: req.body.threeBr,
        sixBr: req.body.sixBr,
        eightBr: req.body.eightBr,
    }

    const hotels = await HotelDetails.findByPk(params)
    hotels.set(newHotelDetails)

    const result = await hotels.save()

    res.status(200).json({
        success: true,
        result
    })
})


// for users => /api/hotels/search
exports.searchHotels = catchAsyncErrors(async (req,res,next) => {

    const { placeName } = req.body

    // find the location id
    const location = await Place.findOne({ where: { place: placeName} })

    // find the hotels in that area
    const hotels = await Hotels.findAll({ where: { PlaceId: location.id } })

    res.status(200).json({
        success: true,
        hotels
    })
})
