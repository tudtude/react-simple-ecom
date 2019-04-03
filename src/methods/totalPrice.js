module.exports = Quantity => {
    if( Quantity.length < 1 ) return 0
    return Quantity.reduce(( acc, item) => {
        acc = acc + item.totalPrice
        return acc
    }, 0 )
}