import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import Login from './assets/components/Authentication/Login'
import Signup from './assets/components/Authentication/Signup'
import Product from './assets/components/Product/Product'
import Navbar from './assets/components/Navbar/Navbar'
import Order from './assets/components/Order/Order'
import AllOrders from  './assets/components/Order/Orders.all'

const isAuthenticated = () => {
    return localStorage.getItem('login') !== null
}

const router = () => {
    return (
        <div>
            <BrowserRouter>
            <Navbar />
    
            <Switch>
                <Route path='/'
                exact
                render={props => (
                    <Home {...props} />
                )}
                />
                <Route path='/login' exact
                render={props => (
                    <Login {...props} />
                )}
                />
                <Route path='/signup' exact component={Signup} />
                <Route path='/products' exact render={props => (
                    <Product {...props} isAuthenticated={isAuthenticated()} />
                )} />
                <Route path='/orders' exact component={Order} />
                <Route path='/orders/all' exact render={props => (
                    <AllOrders {...props} />
                )} />

            </Switch>
            </BrowserRouter>
        </div>
    )
}
export default router