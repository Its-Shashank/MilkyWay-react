import React, { useEffect, useState } from 'react'
import {orders, deleteOrder} from '../../apiCalls/auth'
import AlertDialog from '../Card/AlertDialog'
import './AllOrder.scss'
import { useHistory } from 'react-router-dom'
import {PropagateLoader} from "react-spinners";
import { css } from "@emotion/core";
const override = css`
    display: block;
    margin-left:50%;
   `;

const AllOrders = (props) => {
    const history = useHistory()
    const [ loading, setLoading ] = useState(false)
    const [ loggedIn, setLogin ] = useState(true)
    const [ items, setItems ] = useState([])
    const [ orderRemoved, setOrderRemoved ] = useState(false)

    useEffect(() => {
        setItems([])
        setLoading(true)
        orders()
        .then(response => {
            if (response.message === 'Auth failed') {
                setTimeout(() => {
                    props.history.push('/login')
                }, 2000)
                setLogin(false)
                setLoading(false)
            }
            else if (!response.result[0]) {
                setOrderRemoved(true)
                setLoading(false)
            }
            else {
                setItems([response.result[0]])
                setOrderRemoved(false)
                setLoading(false)
            }
            // console.log(response.result)
        })
    }, [])

    const orderCancel = (event) => {
        event.preventDefault()
        const id = items[0]
        if (id) {
            deleteOrder(id._id)
            .then(response => {

                if (response.message === 'Auth failed') {
                    setLogin(false)
                }
                else if (response.message === 'Order removed successfully') {
                    setOrderRemoved(true)
                    return <AlertDialog message={response.message} />
                }
            })
        }
            
    }
    const loader = () => {
        if(loading === true){
            return <PropagateLoader
            css={override}
            size={25}
            color={"#000"}
            loading={loading}
          />
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
                            <h1 className='all-order-header'>Your active plan.</h1>
                            {loader()}
                            {items.map((item, index) => (
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
                            <h1 className='all-order-header'>You don't have any active plans. Order now to enjoy our services.</h1>
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