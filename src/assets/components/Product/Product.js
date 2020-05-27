import React, { useState } from 'react'
import './product.scss'
import Rupee from './rupee-svg.svg'
import { Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Product = (props) => {

    const [ price, setPrice ] = useState(45)
    
    return (
        <div>
            <div className='product-page-background'>
                <h1 id='plans-head'>Enroll in your plans!</h1>
                <div>
                    <button className='milk-type-btn' onClick={() => setPrice(45)}>
                        Full Cream
                    </button>
                    <button className='milk-type-btn' onClick={() => setPrice(50)}>
                        Skimmed
                    </button>
                </div>
                <div className="plans">

                        {/* Here goes the daily plan */}

                    <div className="plan">
                        <div className='individual-header'>
                            <h1 className='plan-type'>Daily</h1>
                            <div className='price'>
                            <img src={Rupee} className='rupee' alt='' /><h1 className='price-tag'>{price}</h1><h3>/litre</h3>
                        </div>
                        
                        </div>
                        <div className='content'>
                            <Divider />
                            <h2>20 rupees for delivery</h2>
                            <Divider />
                            <h2>Pay daily.</h2>
                            <Divider />
                        </div>
                        <div>
                            <button
                            className='plan-btn'
                            style={{
                                backgroundColor: 'rgb(168, 34, 117)'
                            }}
                            value={20}
                            >
                                { props.isAuthenticated ? (
                                    <Link to={{
                                        pathname: '/orders',
                                        productProps: {
                                            deliveryCharge: 20,
                                            plan: 'Daily',
                                            days: 1,
                                            price: price,
                                            milkType: price === 50 ? 'Skimmed' : 'Full cream'
                                        }
                                    }} className='plan-link'>
                                        Choose Plan
                                    </Link>
                                ) : (
                                    <Link to='/login' style={{
                                        textDecoration: 'none',
                                        color: 'white'
                                    }}>
                                        Choose Plan
                                    </Link>
                                )}
                                
                            </button>
                        </div>
                    </div>

                            {/* Here goes the monthly plans */}
                    
                    <div className="plan">
                        <div className='individual-header'>
                            <h1 className='plan-type'>Monthly</h1>
                            <div className='price'>
                            <img src={Rupee} className='rupee' alt='' /><h1 className='price-tag'>{price}</h1><h3>/litre</h3>
                        </div>
                        
                        </div>
                        <div className='content'>
                            <Divider />
                            <h2>10 rupees for delivery</h2>
                            <Divider />
                            <h2>Pay within 15 days</h2>
                            <Divider />
                        </div>
                        <div>
                            <button
                            className='plan-btn'
                            value={10}
                            style={{
                                backgroundColor: 'rgb(12, 26, 36)'
                            }}>
                                { props.isAuthenticated ? (
                                    <Link to={{
                                        pathname: '/orders',
                                        productProps: {
                                            deliveryCharge: 10,
                                            plan: 'Monthly',
                                            days: 30,
                                            price: price,
                                            milkType: price === 50 ? 'Skimmed' : 'Full cream'
                                        }
                                    }} className='plan-link'>
                                        Choose Plan
                                    </Link>
                                ) : (
                                    <Link to='/login' style={{
                                        color: 'white',
                                        textDecoration: 'none'
                                    }}>
                                        Choose Plan
                                    </Link>
                                )}
                            </button>
                        </div>

                    </div>

                            {/* Here goes the quaterly plans */}
                    
                    <div className="plan">
                        <div className='individual-header'>
                            <h1 className='plan-type' value='quaterly'>Quaterly</h1>
                            <div className='price'>
                            <img src={Rupee} className='rupee' alt='' /><h1 className='price-tag'>{price}</h1><h3>/litre</h3>
                        </div>
                        

                        </div>
                        <div className='content'>
                            <Divider />
                            <h2>Free delivery</h2>
                            <Divider />
                            <h2>Pay in first month.</h2>
                            <Divider />
                        </div>
                        <div>
                            <button
                            className='plan-btn'
                            value={2}
                            style={{
                                backgroundColor: '#7e8de2'
                            }}>
                                { props.isAuthenticated ? (
                                    <Link to={{
                                        pathname: '/orders',
                                        productProps: {
                                            deliveryCharge: 0,
                                            plan: 'Quaterly',
                                            days: 90,
                                            price: price,
                                            milkType: price === 50 ? 'Skimmed' : 'Full cream'
                                        }
                                    }} className='plan-link'>
                                        Choose Plan
                                    </Link>
                                ) : (
                                    <Link to='/login' style={{
                                        textDecoration: 'none',
                                        color: 'white'
                                    }}>
                                        Choose Plan
                                    </Link>
                                )}
                            </button>
                        </div>
                    </div>

                            {/* Here goes the half-yearly plans */}
                    
                    <div className="plan">
                        <div className='individual-header'>
                            <h1 className='plan-type' value='half-yearly'>Half-Yearly</h1>
                            <div className='price'>
                            <img src={Rupee} className='rupee' alt='' /><h1 className='price-tag'>{price}</h1><h3>/litre</h3>
                        </div>


                        </div>
                        <div className='content'>
                            <Divider />
                            <h2>Free delivery</h2>
                            <Divider />
                            <h2>Pay in first two months.</h2>
                            <Divider />
                        </div>
                        <div>
                            <button
                            className='plan-btn'
                            value={1}
                            style={{
                                backgroundColor: '#07ADD4'
                            }}>
                                { props.isAuthenticated ? (
                                    <Link to={{
                                        pathname: '/orders',
                                        productProps: {
                                            deliveryCharge: 0,
                                            plan: 'Half-Yearly',
                                            days: 180,
                                            price: price,
                                            milkType: price === 50 ? 'Skimmed' : 'Full cream'
                                        }
                                    }} className='plan-link'>
                                        Choose Plan
                                    </Link>
                                ) : (
                                    <Link to='/login' style={{
                                        color: 'white',
                                        textDecoration: 'none'
                                    }}>
                                        Choose Plan
                                    </Link>
                                )}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product