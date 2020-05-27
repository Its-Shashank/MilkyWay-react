import React, { useState } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { order } from '../../apiCalls/auth'
import Dialog from '../Card/Dialog'
import AlertDialog from '../Card/AlertDialog'
import './order.scss'
import OrderSvg from './undraw_responsive.svg'

  let initialValues = {
    milkType: '',
    quantity: '',
    deliveryTime: '',
    timeslot: '',
    address: '',
    contact: '',
    price: null,
    orderPlaced: false,
    countFull: false,
    plan: '',
    days: '',
    deliveryCharge: null,
  }

const Order = props => {
  const [ values, setValues ] = useState(initialValues)
  
  console.log(props.location.productProps)
  const state = props.location.productProps

  const handleChange = (event) => {
    setValues({ 
      ...values, 
      price: state.price, 
      days: state.days, 
      deliveryCharge: state.deliveryCharge, 
      milkType: state.milkType, 
      plan: state.plan, 
      [event.target.name]: event.target.value 
    })
  }

  const handleOrderNow = (event) => {
    event.preventDefault()
    console.log('From handleordernow')
    console.log(values)
    
    const { milkType, plan, quantity, deliveryTime, address, contact } = values
    if (!localStorage.getItem('login')) {
      props.history.push('/login')
    }
    else {
      console.log('from else')
      console.log(values.timeslot, values.price)
      order({ milkType, quantity, deliveryTime, address, contact, plan })
      .then(orderData => {
        if (orderData.message === 'Auth failed') {
          props.history.push('/login')
        }
        else if (orderData.err) {
          console.log(orderData.err)
        }
        else if (orderData.message === "Can't add more than one order from an account") {
          setValues({countFull: true})
        }
        else {
          console.log(orderData)
          setValues({ ...values,
            orderPlaced: true,
            countFull: false
          })
        }
      })
      .catch(e => {
        return <h1 style={{
          fontSize: '5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>Something went wrong</h1>
      })
    }
  }

    return (
        <div>
            <div className='order-container'>

              <div className='form-header'>
                <h1>Place your order here.</h1>
                <h2>You chose our {state.plan} plan of {state.milkType} milk.</h2>
                <div className='order-image'>
                  <img src={OrderSvg} alt=""/>
                </div>
              </div>
                <div>
                <form className='form-control'>
                
                <div className='quantity-container'>
                  <label className='form-labels' htmlFor="Quantity">Quantity</label>
                  <input 
                  type="number"
                  name="quantity"
                  placeholder='0'
                  onChange={handleChange}
                  className='form-inputs'
                  required />
                </div>
                <div className='quantity-container'>
                  <label className='form-labels' htmlFor="Delivery">Delivery</label>
                  <Select
                  onChange={handleChange}
                  disableUnderline={true}
                  defaultValue='None'
                  name='deliveryTime'
                  className='material-inputs'
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value='None'>None</MenuItem>
                    <MenuItem value='Morning'>Morning</MenuItem>
                    <MenuItem value='Afternoon'>Afternoon</MenuItem>
                    <MenuItem value='Evening'>Evening</MenuItem>
                  </Select>
                </div>
                <div className='quantity-container'>
                  <label className='form-labels' htmlFor="Timeslot">Time Slot</label>
                <Select
                  disableUnderline={true}
                  onChange={handleChange}
                  defaultValue='none'
                  className='material-inputs'
                  name='timeslot'
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value='none'>None</MenuItem>
                    <MenuItem value='6am to 8am'>6am to 8am</MenuItem>
                    <MenuItem value='8am to 10am'>8am to 10am</MenuItem>
                    <MenuItem value='10am to 12pm'>10am to 12pm</MenuItem>
                    <MenuItem value='12pm to 2pm'>12pm to 2pm</MenuItem>
                    <MenuItem value='2pm to 4pm'>2pm to 4pm</MenuItem>
                    <MenuItem value='4pm to 6pm'>4pm to 6pm</MenuItem>
                    <MenuItem value='6pm to 8pm'>6pm to 8pm</MenuItem>
                    <MenuItem value='8pm to 10pm'>8pm to 10pm</MenuItem>
                  </Select>
                </div>

                <div className='quantity-container'>
                  <label className='form-labels' htmlFor="address">Address</label>
                  <input
                  className='form-inputs'
                  type="text"
                  name="address"
                  onChange={handleChange}
                  required
                   />
                </div>
                <div className='quantity-container'>
                  <label className='form-labels' htmlFor="contact">Contact No.</label>
                  <input
                  className='form-inputs'
                  type="text"
                  name='contact'
                  onChange={handleChange}
                  required
                   />
                </div>
              <button onClick={handleOrderNow}>Order Now</button>
                  
              </form>
              
                { (state.days === 90 || state.days === 180) ? (
                  <div>
                    <div className='popup-container'>
                      { !isNaN(parseInt(state.price) * parseFloat(values.quantity) * parseInt(state.days)) && ( 
                        <h1 id='popup-header'>Your total: { parseInt(state.price) * parseFloat(values.quantity) * parseInt(state.days) } </h1>
                        
                      )}
                  { values.orderPlaced && !values.countFull && <Dialog {...props} plan={values.plan} total={ parseInt(state.price) * parseFloat(values.quantity) * parseInt(state.days) }  /> }
                      
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className='popup-container'>
                      { !isNaN((parseInt(state.price) * parseFloat(values.quantity) + parseInt(state.deliveryCharge)) * parseInt(state.days)) && (
                      <h1 id='popup-header'>Your total: { (parseInt(state.price) * parseFloat(values.quantity) + parseInt(state.deliveryCharge)) * parseInt(state.days) } </h1>

                      )}
                  { values.orderPlaced && !values.countFull && <Dialog {...props} plan={values.plan} total={ (parseInt(state.price) * parseFloat(values.quantity) + parseInt(state.deliveryCharge)) * parseInt(state.days) }  /> }
                      
                    </div>
                  </div>
                ) }

              { values.countFull && !values.orderPlaced && <AlertDialog /> }
                </div>

            </div>
        </div>
    )
}
export default Order