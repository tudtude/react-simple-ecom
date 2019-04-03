import React, { Component } from 'react'
import { connect } from 'react-redux'
import RA from '../redux/actions'
import { Segment, Header, Icon } from 'semantic-ui-react'
import Cards from '../components/Cards'
import {products} from '../data/products.json'

class MainPage extends Component {

  render() {
    let { cart, addToCart, removeFromCart } = this.props
    return (
      <Segment basic>
        <Header as='h2' icon textAlign='center'>
          <Icon name='cart'/>
          Our products
          <Header.Subheader>Enjony our Toys, all are avalible in stock</Header.Subheader>
        </Header>
        <Cards
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          products={products}/>
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

export default connect(reduxToProps, actionToProps)(MainPage)
