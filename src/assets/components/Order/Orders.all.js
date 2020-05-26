import React, { useEffect, useState } from 'react'
import {orders, deleteOrder} from '../../apiCalls/auth'
import AlertDialog from '../Card/AlertDialog'
import './AllOrder.scss'
import { useHistory } from 'react-router-dom'

const AllOrders = (props) => {
    const history = useHistory()
    const [ loggedIn, setLogin ] = useState(true)
    const [ items, setItems ] = useState([])
    const [ orderRemoved, setOrderRemoved ] = useState(false)

    useEffect(() => {
        setItems([])
        orders()
        .then(response => {
            if (response.message === 'Auth failed') {
                setTimeout(() => {
                    props.history.push('/login')
                }, 2000)
                setLogin(false)
            }
            else {
                console.log(response.result[0])
                setItems([response.result[0]])
            }
            // console.log(response.result)
        })
        .catch(e => console.log(e))
    }, [])

    const orderCancel = (event) => {
        event.preventDefault()
        const id = items[0]
        console.log(id)
        if (id) {
            deleteOrder(id._id)
            .then(response => {
                if (response.err) {
                    console.log(response.err)
                }
                else {
                    
                    if (response.message === 'Auth failed') {
                        setLogin(false)
                    }
                    else if (response.message === 'Order removed successfully') {
                        setOrderRemoved(true)
                        return <AlertDialog message={response.message} />
                    }
                    console.log(response)
                }

            })
            .catch(err => console.log(err))
            console.log(items[0]._id)
        }
            
    }

    const redirectHome = () => {
        history.push('/')
    }

    return (
        <div id='order-header'>
            { !loggedIn ? (
                <div><h1>Session expired. You are logged out.</h1></div>
            ) : (
                <div>
                    { !orderRemoved ? 
                    (
                        <div>
                            <h1 className='all-order-header'>Here are all your orders.</h1>
                            {items.map((item, index) => (
                            // console.log(item)
                            <ul key={index} className='order-display'>
                                <li> Milktype: {item.milkType} </li>
                                <li>Plan: {item.plan} </li>
                                <li> Quantity: {item.quantity} </li>
                                <li> Delivery Time: {item.deliveryTime} </li>
                                <li> Delivery Address: {item.address} </li>
                                <li> Contact: {item.contact} </li>
                            </ul>
                        ))}
                            <button onClick={orderCancel} className='cancel-order-btn'>Cancel order</button>
                        </div>
                        
                    ) : (
                        <div>
                            <h1 className='all-order-header'>You have not subscribed to our plans yet.</h1>
                            <button className='cancel-order-btn' onClick={redirectHome}> Order Now </button>
                        </div>
                        
                    )}
                    
                    
                    
                </div>
            )}
            
        </div>
    )
}
export default AllOrders
// const AllOrders = () => {
  
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             console.log('Time called')
//         }, 5000);
//         return () => clearTimeout(timer);
//     }, []);
  
//     return (
//         <div id='order-header'>
//             <h1>Hello world</h1>
//         </div>
//     );
//   };
  
//   export default AllOrders;