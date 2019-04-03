import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Header, Icon } from 'semantic-ui-react'
import RA from '../redux/actions'
import OrderTable from '../components/OrderTable'

export class CartPage extends Component {
  render() {
    let { cart, addToCart, removeFromCart } = this.props
    return (
      <Segment basic>
        <Header as='h2' icon textAlign='center'>
          <Icon name='cart' />
          Your Orders lists
        </Header>
        <OrderTable
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          cart={cart} />
      </Segment>
    )
  }
}

const reduxToProps = state => {
  return {
    cart: state.cart
  }
}

const actionToProps = action => {
  return {
    addToCart: item => action({ type: RA.ADDTOCART, payload: item }),
    removeFromCart: item => action({ type: RA.REMOVEFROMCART, payload: item })
  }
}

export default connect(reduxToProps, actionToProps)(CartPage)
