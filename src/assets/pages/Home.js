import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/base.scss'
import '../scss/home.scss'
import Card from '../components/Card/Card'

const Home = (props) => {
    return (
        <div>
            <div className='wrapper'>
                <section class="section parallax bg1">
                    <div className='header'>
                        <h1>isLoggedIn: {props.isLoggedIn} </h1>
                        <h1 className='main'>Here to fulfill your calcium needs.</h1>
                        <h3 className='sub'>
                            Don't you worry,
                            We have your milk.
                            You won't have have to go out to buy it 
                            we'll deliver it to you. You can trust us.
                        </h3>
                        <Link to='/products'>
                            <button id='button'>
                                <span>Order Now</span>
                            </button>
                        </Link>
                        
                    </div>
                    
                </section>
                <div className='shadow-container'>
                    <div class="upper-container">
                        <div className="product-talk-container">
                            <div id='product-talk'>
                                <h1 className='product-talk-head'>Let's talk product!</h1>
                                <h3 id='product-talk-subhead'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, asperiores hic atque consectetur quo et eveniet necessitatibus nisi maiores, dolorem sed temporibus ex. Rem deleniti labore corrupti nam? Dolore, quisquam.
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus praesentium dolore, debitis sed est hic! Quos et ea quae iure voluptatem quibusdam voluptatibus eligendi fugit. Nulla adipisci dicta officia, a laboriosam sint architecto sed corrupti sunt beatae voluptas illo possimus porro vel voluptatem expedita eaque vitae assumenda tempora aliquam quae.
                                    
                                </h3>
                            </div>
                        </div>

                        {/* users */}
                        <h1 className='product-talk-head'>Let's see what our customers have to say about us.</h1>
                        <div id='users'>
                            <div id='all-user-div'>
                                <Card />
                                <Card />
                                <Card />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Home