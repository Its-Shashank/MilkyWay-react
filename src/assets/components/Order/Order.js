import React, { useState, useEffect } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { order } from '../../apiCalls/auth'
import Dialog from '../Card/Dialog'
import AlertDialog from '../Card/AlertDialog'
import './order.scss'

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
    total: ''
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
    // console.log(values)
    // console.log('handlechange',values)
  }

  const handleOrderNow = (event) => {
    event.preventDefault()
    console.log('From handleordernow')
    console.log(values)
    
    const { milkType, plan, quantity, deliveryTime, price, timeslot, address, contact } = values
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

          // totalPrice()
        }
        // props.history.push(`orders/${id}`)
      })
      .catch(e => console.log(e))
    }
  }

  // Function to calculate the total amount to be paid
  let totalValue
  useEffect(() => {

      if ( state.days === 90 || state.days === 180) {
        totalValue = parseInt(state.price) * parseFloat(values.quantity) * parseInt(state.days)
      }
      else {
        totalValue = (parseInt(state.price) * parseFloat(values.quantity) + parseInt(state.deliveryCharge)) * parseInt(state.days)
      }
      // setValues({total: totalValue})
      console.log(totalValue)
  }, [values.quantity])

    return (
        <div>
            <div className='order-container'>
              { values.orderPlaced && !values.countFull && <Dialog {...props} plan={values.plan} total={values.total}  /> }
              { values.countFull && !values.orderPlaced && <AlertDialog /> }

              <div className='form-header'>
                <h1>Place your order here.</h1>
                <h2>You chose our {state.plan} plan of {state.milkType} milk.</h2>
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

              
          
                  {/* { isNaN(totalValue) ? ( 
                    <div>

                    </div>
                  
                  ) : ( 
                    <div className='popup-container'>
                      <h1 id='popup-header'>Your total: {totalValue} </h1>
                      
                    </div>
                  )} */}
                </div>

            </div>
        </div>
    )
}
export default Order