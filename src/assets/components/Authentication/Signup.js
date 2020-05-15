import React, { useState, useEffect } from 'react'
import axios from 'axios'
import loginImg from './undraw_fingerprint.svg'
import './auth.scss'
import { Email, Face, Lock } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { Signup_Call } from '../../apiCalls/auth'

const Signup = () => {

    // const [ name, setName ] = useState('')
    // const [ email, setEmail ] = useState('')
    // const [ password, setPassword ] = useState('')
    //const [ password_confirmation, SetPasswordConfirmation ] = useState('')
    const [ values, setValues ] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = event => {
        setValues({ ...values, [event.target.name]: event.target.value})
    }
    
    const handleSubmit = event => {
        event.preventDefault()
        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        const url = "http://localhost:9000/customer/signup"
        axios.post(proxyurl+url, values)
        .then(response => console.log('resgistered', response))
        .catch(err => console.log(err))

        console.log('Form submitted')
    }
    
    
        return (
            <div>
                <div className="base-container">
                        <div className="content">
                            <div className="image">
                                <img src={loginImg} alt=" "/>
                            </div>
                            <form className="form">
                                <div className="form-group">
                                    <label htmlFor="name"><Face /></label>
                                    <input type="text" name='name' placeholder='Username' onChange={handleChange} value={values.name} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email"><Email /></label>
                                    <input type="email" name="email" placeholder='Email' onChange={handleChange} value={values.email} />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="password"><Lock /></label>
                                    <input type="password" name="password" placeholder='Password' onChange={handleChange} value={values.password} />
                                </div>

                                {/* <div className="form-group">
                                    <label htmlFor="password_confirmation"><Lock /></label>
                                    <input type="password" name="password_confirmation" placeholder='Password Confirmation' onChange={e => SetPasswordConfirmation(e.target.value)} value={password_confirmation} />
                                </div> */}
                            <h3>By clicking to SIGNUP you are agreeing to the MilkyWay <span>Privacy Policy</span> and <span>Tems of Use.</span></h3>

                            </form>
                            <div className="ask">
                                <h4>Already a user ? </h4><Link to='/login' className='change-link'>Login</Link>
                            </div>
                            <div className="footer">
                                <button type='submit' className="btn" onClick={handleSubmit} >Signup</button>
                            </div>
                        </div>
                        
                </div>
            </div>
        )
    }
export default Signup
