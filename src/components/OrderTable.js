import React, { Component } from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'

class OrderTable extends Component {
    render() {
        let { cart, addToCart, removeFromCart } = this.props
        let cartQuantity = require('../methods/quantity')( cart )
        let totalPrice = require('../methods/totalPrice')( cartQuantity )
        console.log( 'totalPrice',totalPrice.toFixed(2) )
        return (
            
            
                <Table basic style={{width: '80%', margin: 'auto'}}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell >Item name</Table.HeaderCell>
                            <Table.HeaderCell width={3} >Quantity</Table.HeaderCell>
                            <Table.HeaderCell width={3}>Total Price</Table.HeaderCell>
                            <Table.HeaderCell >Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {
                        cart.length < 1 && (
                            <Table.Footer fullWidth>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='5' textAlign='center'>
                                        There is no any orders
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Footer>
                        )    
                    }
                    {
                        cartQuantity.length > 0 && cartQuantity.map((item, key) => {
                            return (
                                <Table.Body key={key}>
                                    <Table.Row>
                                        <Table.Cell>{item.name}</Table.Cell>
                                        <Table.Cell>{item.quantity}</Table.Cell>
                                        <Table.Cell>{item.totalPrice.toFixed(2)}</Table.Cell>
                                        <Table.Cell collapsing>
                                            <Button 
                                                basic color='green'
                                                onClick={() => addToCart(item)}
                                            >
                                                <Icon name='plus cart' />
                                                Add
                                            </Button>
                                            <Button 
                                                basic color='red'
                                                onClick={() => removeFromCart(item)}
                                            >
                                                <Icon name='cut' />
                                                Reduce
                                            </Button>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            )
                        })
                    }
                    {
                        cartQuantity.length > 0 && (
                            <Table.Footer>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='2' textAlign='center'>
                                        Total Price
                                    </Table.HeaderCell>
                                    <Table.HeaderCell>
                                        {totalPrice.toFixed(2)}$
                                    </Table.HeaderCell>
                                    <Table.HeaderCell></Table.HeaderCell>
                                </Table.Row>
                            </Table.Footer>
                        )
                    }

                </Table>
        )
    }
}

export default OrderTable
