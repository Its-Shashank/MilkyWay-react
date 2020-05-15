import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Contact from './assets/pages/Contact'
import Login from './assets/components/Authentication/Login'
import Signup from './assets/components/Authentication/Signup'
import Product from './assets/components/Product/Product'
import Navbar from './assets/components/Navbar/Navbar'

function router() {
    return (
        <div>
            <BrowserRouter>
            <Navbar />

            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/contact' exact component={Contact} />
                <Route path='/about' exact component={About} />
                <Route path='/login' exact component={Login} />
                <Route path='/signup' exact component={Signup} />
                <Route path='/products' exact component={Product} />
            </Switch>
            </BrowserRouter>
        </div>
    )
}
export default router