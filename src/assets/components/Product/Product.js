import React, { useState } from 'react'
import './product.scss'
import Rupee from './rupee-svg.svg'
import {Divider} from '@material-ui/core'

function Product() {

    const [ price, setPrice ] = useState(45)
    // const [ click, setClick ] = useState(true)
    
    return (
        <div>
            <div className='product-page-background'>
                <h1 id='plans-head'>Enroll in your plans!</h1>
                <div>
                    <button className='milk-type-btn' onClick={() => setPrice(45)}>
                        Full Cream
                    </button>
                    <button className='milk-type-btn' onClick={() => setPrice(40)}>
                        Skimmed
                    </button>
                </div>
                <div className="plans">
                    <div className="plan">
                        <h1 className='plan-type'>Daily</h1>
                        <div className='price'>
                        <img src={Rupee} className='rupee' alt='' /><h1 className='price-tag'>{price}</h1><h3>/litre</h3>

                        </div>
                        <div className='content'>
                            <Divider />
                            <h2>20 rupees for delivery</h2>
                            <Divider />
                            <h2>Pay daily.</h2>
                            <Divider />
                        </div>
                        <div>
                            <button className='plan-btn' style={{
                                backgroundColor: 'rgb(168, 34, 117)'
                            }}>Choose Plan</button>
                        </div>
                    </div>
                    <div className="plan">
                        <h1 className='plan-type'>Monthly</h1>
                        <div className='price'>
                        <img src={Rupee} className='rupee' alt='' /><h1 className='price-tag'>{price}</h1><h3>/litre</h3>

                        </div>
                        <div className='content'>
                            <Divider />
                            <h2>10 rupees for delivery</h2>
                            <Divider />
                            <h2>Pay within 15 days</h2>
                            <Divider />
                        </div>
                        <div>
                            <button className='plan-btn' style={{
                                backgroundColor: 'rgb(12, 26, 36)'
                            }}>Choose Plan</button>
                        </div>

                    </div>
                    <div className="plan">
                        <h1 className='plan-type'>Quaterly</h1>
                        <div className='price'>
                        <img src={Rupee} className='rupee' alt='' /><h1 className='price-tag'>{price}</h1><h3>/litre</h3>

                        </div>
                        <div className='content'>
                            <Divider />
                            <h2>Free delivery</h2>
                            <Divider />
                            <h2>Pay in first month.</h2>
                            <Divider />
                        </div>
                        <div>
                            <button className='plan-btn' style={{
                                backgroundColor: '#7e8de2'
                            }}>Choose Plan</button>
                        </div>

                    </div>
                    <div className="plan">
                        <h1 className='plan-type'>Half-Yearly</h1>
                        <div className='price'>
                        <img src={Rupee} className='rupee' alt='' /><h1 className='price-tag'>{price}</h1><h3>/litre</h3>

                        </div>
                        <div className='content'>
                            <Divider />
                            <h2>Free delivery</h2>
                            <Divider />
                            <h2>Pay in first two months.</h2>
                            <Divider />
                        </div>
                        <div>
                            <button className='plan-btn' style={{
                                backgroundColor: '#07ADD4'
                            }}>Choose Plan</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product