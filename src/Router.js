import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import CartPage from './pages/CartPage'

const Router = () => {
  return (
    <Switch>
        <Route exact path='/' component={ MainPage }  />
        <Route exact path='/cart' component={ CartPage } />
    </Switch>
  )
}

export default Router
