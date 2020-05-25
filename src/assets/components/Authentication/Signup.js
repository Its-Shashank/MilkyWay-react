import React from 'react'
import loginImg from './undraw_fingerprint.svg'
import SnackBar from '../Card/Snackbar'
import './auth.scss'
import { Email, Face, Lock } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { signup } from '../../apiCalls/auth'


export default class Signup extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: "",
            email: "",
            password: "",
            error: '',
            isSignedUp: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        const { name, email, password } = this.state
        signup({ name, email, password }).then(response => {
            if (response.message === 'User created') {
                this.setState({ isSignedUp: true })
            }
            else if (response.message === 'Mail exists'){
                this.setState({ error: true })
            }
            console.log('registration', response)

            this.setState({
                name: "",
                email: "",
                password: ""
            })
        }).catch(err => console.log('error catch', err))
        console.log('form submitted')
        event.preventDefault()
    }
    

    render() {
        const {error, isSignedUp} = this.state 
        return (
            <div>
                <div className="base-container">
                    { isSignedUp ? (
                        <SnackBar message='You are signed up' isSignedUp={true} />
                    ) : null}
                        <div className="content">
                            <div className="image">
                                <img src={loginImg} alt=" "/>
                            </div>
                            <form className="form" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name"><Face /></label>
                                    <input 
                                    type="text" 
                                    name='name'
                                    placeholder='Username' 
                                    value={this.state.name}
                                    onChange={this.handleChange} 
                                    required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email"><Email /></label>
                                    <input 
                                    type="email" 
                                    name="email" 
                                    placeholder='Email' 
                                    value={this.state.email}
                                    onChange={this.handleChange} 
                                    required />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="password"><Lock /></label>
                                    <input 
                                    type="password" 
                                    name="password" 
                                    placeholder='Password' 
                                    value={this.state.password}
                                    onChange={this.handleChange} 
                                    required />
                                </div>

                                {/* <div className="form-group">
                                    <label htmlFor="password_confirmation"><Lock /></label>
                                    <input type="password" name="password_confirmation" placeholder='Password Confirmation' onChange={e => SetPasswordConfirmation(e.target.value)} value={password_confirmation} />
                                </div> */}
                            <h3>By clicking to SIGNUP you are agreeing to the MilkyWay <span>Privacy Policy</span> and <span>Tems of Use.</span></h3>
                            <div className="ask">
                                <h4>Already a user ? </h4><Link to='/login' className='change-link'>Login</Link>
                            </div>
                            <div className="footer">
                                <button 
                                type='submit' 
                                className="btn" >Signup
                                </button>
                            </div>
                            </form>
                            
                            
                        </div>
                        { error? (
                        <SnackBar isOpen={true} message='Mail exists' />
                    ) : ( <></> ) }
                </div>
            </div>
        )
    }
}
