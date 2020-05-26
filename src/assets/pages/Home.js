import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/base.scss'
import '../scss/home.scss'
import Card from '../components/Card/Card'

const Home = (props) => {
    return (
        <div>
            <div className='wrapper home-background'>
                    <div className='header'>
                        <h1 className='main'>Here to fulfill your calcium needs.</h1>
                        <h3 className='sub'>
                            Don't you worry,
                            We have your milk.
                            You won't have have to go out to buy it 
                            we'll deliver it to you. You can trust us.
                            We are a an online milk delivering platform.
                            Why don't you checkout our plans!
                        </h3>
                        <Link to='/products'>
                            <button id='button'>
                                <span>Order Now</span>
                            </button>
                        </Link>
                        
                    </div>

            </div>
        </div>
    )
}
export default Home