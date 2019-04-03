module.exports = cart => {
    return cart.reduce((acc, item) => {
        if( acc.includes( item ) ){
            item.quantity ++
            item.totalPrice = item.price * item.quantity
            return acc
        } else {
            item.quantity = 1
            item.totalPrice = item.price
            acc.push( item )
            return acc
        }
    }, [])
}