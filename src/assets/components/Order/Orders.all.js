import React, { useEffect, useState } from 'react'
import {orders, deleteOrder} from '../../apiCalls/auth'
import AlertDialog from '../Card/AlertDialog'
import { Link } from 'react-router-dom'

const AllOrders = (props) => {
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

    const orderCancel = () => {
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
                    if (response.message === 'Order removed successfully') {
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

    return (
        <div id='order-header'>
            { !loggedIn ? (
                <div><h1>Session expired. You are logged out.</h1></div>
            ) : (
                <div>
                    { !orderRemoved ? (<h1>Here are all your orders.</h1>) : (<h1>You have not subscribed to our plans yet.</h1>)}
                    
                    {   //console.log(items[0])
                        !orderRemoved && 
                        items.map((item, index) => (
                            // console.log(item)
                            <ul key={index}>
                                <li> {item.milkType} </li>
                                <li> {item.quantity} </li>
                                <li> {item.deliveryTime} </li>
                                <li> {item.address} </li>
                                <li> {item.contact} </li>
                            </ul>
                        ))
                    }
                    { !orderRemoved ? (<button onClick={orderCancel}>Cancel order</button>): (<button> <Link to='/products'>Order Now</Link> </button>)}
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