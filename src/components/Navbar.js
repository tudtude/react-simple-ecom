import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

function Navbar( props ) {
    
    let { activeMenu, menuClick } = props
    return (
        <Segment inverted attached>
            <Menu inverted secondary pointing>
                <Menu.Item
                    as={ NavLink }
                    to='./' 
                    name='home' 
                    active={activeMenu === 'home'} 
                    onClick={menuClick}/>
                <Menu.Item
                    as={ NavLink }
                    to='./cart' 
                    name='cart' 
                    active={activeMenu === 'cart'}
                    onClick={menuClick}/>
            </Menu>
        </Segment>
    )
}

export default Navbar
