import React, { Component } from 'react'
import { Button, Card, Image, Icon } from 'semantic-ui-react'

class Cards extends Component {

    render() {
        let { products, addToCart, removeFromCart, cart } = this.props
        return (
            <Card.Group style={{ marginRight: 'auto', marginLeft: 'auto', paddingLeft: '3%' ,width: '95%' }}>
                {
                    products && products.map(product => {
                        let quantity = cart.filter( item => product.id === item.id ).length
                        return (
                            <Card key={product.id}>
                                <Card.Content>
                                    <div style={{ textAlign: 'center', paddingBottom: '1em' }}>
                                        <Image style={{ height: '200px'}} src={`/products/${product.image}`} />
                                    </div>
                                    <Card.Header>{product.name}</Card.Header>
                                    <div style={{ paddingBottom: '1em' }}><span style={{ fontWeight: "bold" }}>{product.price}$</span></div>
                                    <Card.Description>{product.description}</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div style={{ 
                                        marginBottom: '1em',
                                        fontWeight:'bold',
                                        color: 'black'
                                        }}
                                    >Quantity : {quantity}</div>
                                    <div className='ui two buttons'>
                                        <Button 
                                            basic color='green'
                                            onClick={() => addToCart(product)}
                                        >
                                            <Icon name='plus cart' />
                                            Add
                                        </Button>
                                        <Button 
                                            basic color='red'
                                            onClick={() => removeFromCart(product)}
                                        >
                                            <Icon name='cut' />
                                            Reduce
                                        </Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        )
                    })
                }
            </Card.Group>
        )
    }
}

export default Cards