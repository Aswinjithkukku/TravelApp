const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js");
const {
  Flight,
  Addons,
  Tax_fare,
  Flight_price,
  Passport,
  Booking,
  Booking_summary
} = require("../models");
const flightdata = require("../data/flightdata.json");
const flightprice = require("../data/flightprice.json");

exports.flightBooking = catchAsyncErrors(async (req, res, next) => {
  console.log(flightdata);
  const {
    iata_departure,
    place_departure,
    iata_arrival,
    place_arrival,
    date_departure,
    adults,
    children,
    infants,
    cabin_class,
    currency,
    baggage,
    meals,
    baggage_price,
    meals_price,
    amount,
  } = req.body.enquiries;
  const {
    time_departure,
    time_arrival,
    track_id,
    duration,
    price,
    fuel_surcharge,
    user_dev_fee,
    airline_misc,
  } = flightdata;

  const flight = await Flight.create({
    iata_departure,
    place_departure,
    time_departure,
    iata_arrival,
    place_arrival,
    time_arrival,
    track_id,
    date_departure,
    adults,
    children,
    infants,
    cabin_class,
    currency,
    duration,
    price,
  });
  let addons = {};
  if (baggage || meals) {
    addons = await Addons.create({
      baggage,
      meals,
      baggage_price,
      meals_price,
      amount,
      FlightId: flight.id,
    });
  }
  const taxes = await Tax_fare.create({
    fuel_surcharge,
    user_dev_fee,
    airline_misc,
    FlightId: flight.id,
  });

  const {
    totalAmount,
    originalAmount,
    amountPerAdult,
    amountPerChild,
    amountPerInfant,
    remainingseat,
  } =  flightprice;

  const flightAmounts = await Flight_price.create({
    total_amount: totalAmount,
    original_amount: originalAmount,
    adult_amount: amountPerAdult,
    children_amount: amountPerChild,
    infant_amount: amountPerInfant,
    remainingseat,
    FlightId: flight.id,
    AddonId: addons ? addons.id : "no Addons",
    TaxFareId: taxes.id,
  });

  const {
    title,
    firstname,
    lastname,
    nationality,
    dob,
    visa_type,
    passport_number,
    passport_expiry,
    issuing_country,
    email,
    phone
  } = req.body.passport;

  const passportData = await Passport.create({
    title,
    firstname,
    lastname,
    nationality,
    dob,
    visa_type,
    passport_number,
    passport_expiry,
    issuing_country,
    email,
    phone,
  });

  const flightTotal = flightAmounts.total_amount + taxes.fuel_surcharge
  const bookingFlight = await Booking.create({
    date: Date.now(),
    status: "payed",
    amount: flightTotal,
    type: "api"
  })
const summary = await Booking_summary.create({
    type: "flight",
    date: Date.now(),
    is_active: true,
    quantity: 1,
    amount: flightTotal,
    BookingId: bookingFlight.id,
    HotelPriceId: null,
    AcivityId: null,
    FlightPriceId: flightAmounts.id,
    VisaPriceId: null
})

  res.status(201).json({
    success: true,
    flight,
    addons,
    taxes,
    flightAmounts,
    passportData,
    bookingFlight,
    summary
  });
});

exports.totalFlightBookings = catchAsyncErrors(async (req,res,next) => {
    const bookings = await Booking_summary.findAll({ where: { type: "flight" } })

    res.status(200).json({
      bookings
    })
})
