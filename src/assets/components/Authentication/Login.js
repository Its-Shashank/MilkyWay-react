import React, { useState } from 'react'
import loginImg from './undraw_fingerprint.svg'
import './auth.scss'
import { Email, Lock } from '@material-ui/icons'
import Snackbar from '../Card/Snackbar'
import { Link } from 'react-router-dom'
import { login } from '../../apiCalls/auth'
import {PropagateLoader} from "react-spinners";
import { css } from "@emotion/core";
const override = css`
    display: block;
    margin-left:50%;
   `;
const Login = () => {
    const initialValues = {
        email: '',
        password: '',
        userName: '',
        store: null,
        loggedIn:false,
        loading : false
    }

    const [ authValues, setAuthValues ] = useState(initialValues)

    const handleChange = event => {
        setAuthValues({ ...authValues, [event.target.name]: event.target.value })
    }
    
    const handleSubmit = event => {
        setAuthValues({
            loading:true
        })
        const { email, password } = authValues
        login({ email, password })
        .then(user => {
            localStorage.setItem('login', JSON.stringify(user.token))
            setAuthValues({
                email: '',
                password: '',
                userName: user.name,
                loggedIn: true,
                loading:false
            })
        })
        event.preventDefault()
    }
    const loader = () => {
        if(authValues.loading === true){
            return <PropagateLoader
            css={override}
            size={25}
            color={"#6C63FE"}
            loading={authValues.loading}
          />
        }
    }
    return (
        <div>
            { authValues.loggedIn && (
                <div>
                    <Snackbar message={`Welcome ${authValues.userName}`} />
                </div>
            )}
            <div className="base-container">
                    <div className="content">
                        <div className="image">
                            <img src={loginImg} alt=""/>
                        </div>
                        <form>
                            {loader()}
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="email"><Email /></label>
                                <input
                                type="email"
                                name='email'
                                placeholder='Email'
                                onChange={handleChange}
                                value={authValues.email}
                                required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password"><Lock /></label>
                                <input
                                type="password"
                                name="password"
                                placeholder='Password'
                                onChange={handleChange}
                                value={authValues.password}
                                required
                                />
                            </div>
                        </div>
                        <div className="ask">
                            <h4>New here ? </h4><Link to='/signup' className='change-link'>Signup</Link>
                        </div>
                        
                        </form>
                        <div className="footer">
                        <button onClick={handleSubmit} className="btn">Login</button>
                        </div>
                    </div>
            </div>
        </div>
                
                
                    
    )
}
export default Login