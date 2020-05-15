// https://ecomapii.herokuapp.com/api/signup
export const Signup_Call = user => {
    return fetch("https://localhost:9000/customer/signup",{
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

export const getAllCustomers = customer => {
    return fetch("https://localhost:9000/customer", {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customer)
    }).then(response => response.json())
    .catch(err => console.log(`Error is from auth ${err}`))
}