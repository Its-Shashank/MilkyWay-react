import React, { useEffect } from 'react'
import loginImg from './undraw_fingerprint.svg'
import './auth.scss'
import { Email, Lock } from '@material-ui/icons'
import { Link } from 'react-router-dom'
// import { getAllCustomers } from '../../apiCalls/auth'

function Login() {
    // getAllCustomers().then(res => console.log(res)).catch(err => console.log(err))
    useEffect(() => {
        fetchData()
    })

    const fetchData = async () => {
        const data = await fetch('https://localhost:9000/customer')
        const items = await data.json()
        console.log(items)
    }
    return (
        <div>
            <div className="base-container">
                    <div className="content">
                        <div className="image">
                            <img src={loginImg} alt=" "/>
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="email"><Email /></label>
                                <input type="email" name='email' placeholder='Email' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password"><Lock /></label>
                                <input type="password" name="password" placeholder='Password' />
                            </div>
                        </div>
                        <div className="ask">
                            <h4>New here ? </h4><Link to='/signup' className='change-link'>Signup</Link>
                        </div>
                        <div className="footer">
                        <button type='button' className="btn">Login</button>
                    </div>
                    </div>
                    
            </div>
        </div>
    )
}
export default Login