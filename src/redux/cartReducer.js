const RA = require('./actions')
const cartReducer = ( state=[], action ) => {
    switch( action.type ){
        case RA.ADDTOCART:
            return [...state, action.payload]
        case RA.REMOVEFROMCART:
            let index = state.indexOf(action.payload)
            return state.filter((item, key ) => key !== index )
        default:
            return state
    }
}

export default cartReducer