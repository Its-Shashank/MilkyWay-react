// https://ecomapii.herokuapp.com/api/signup
// https://milky-way-api.herokuapp.com/
const API = 'https://milkyway-api.herokuapp.com'
export const signup = user => {
    return fetch(`${API}/customer/signup`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const login = async user => {
    return await fetch(`${API}/customer/login`, {
        method: "POST",
        headers: {
            Accept: "applocation/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

// Get all orders
export const orders = async user => {
    return await fetch(`${API}/orders/all`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " +  JSON.parse(localStorage.getItem('login'))
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .catch(e => console.log(e))
}

// Order now
export const order = async user => {
    const token = JSON.parse(localStorage.getItem('login'))
    return await fetch(`${API}/orders`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            'Authorization': token ? `Bearer ${token}` : ''
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .catch(e => console.log(e))
}

// Remove an order
export const deleteOrder = async ( id ) => {
    const token = JSON.parse(localStorage.getItem('login'))
    return await fetch(`${API}/orders/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            Accept: 'application/json'
        }
    })
    .then(response => response.json())
    .catch(e => console.log(e))
}