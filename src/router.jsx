import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Contact from './assets/pages/Contact'
import Dashboard from './assets/pages/Dashboard'
function router() {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/dashboard' exact component={Dashboard} />
                <Route path='/contact' exact component={Contact} />
                <Route path='/about' exact component={About} >
                    <About name='Shashank' />
                </Route>
            </Switch>
            </BrowserRouter>
        </div>
    )
}
export default router