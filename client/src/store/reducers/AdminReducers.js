import {
    ALL_BOOKINGS_REQUEST,
    ALL_BOOKINGS_SUCCESS,
    ALL_BOOKINGS_FAIL,
} from '../constants/AdminConstants'

export const flightReducer = ( state = { bookings : {} }, action ) => {
    switch(action.type){
        case ALL_BOOKINGS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ALL_BOOKINGS_SUCCESS:
            return {
                ...state,
                loading: false,
                bookings: action.payload
            }
        case ALL_BOOKINGS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}