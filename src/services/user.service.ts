import Axios from 'axios';


const api_url = 'http://localhost:8080/users';
export const userService = {
    signup,
    signin,
    changeInfo,
    logout
};

async function signup(user: any) {
    const { username, firstName, lastName, email, password } = user;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, firstName, lastName, email, password })
    };
    return await fetch(`${api_url}/signup`, requestOptions)
        .then((res) => { console.log(res); return res; })
        .then(handleResponse)
        .then(response => response.json())
        .then(user => {
            return user;
        });
}

async function signin(user: any) {
    const { username, password } = user;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    return await fetch(`${api_url}/signin`, requestOptions)
        .then(handleResponse)
        .then(response => response.json())
        .then(res => {console.log(res); return res;})
        .then(response => {return {...response.myUser, creditCard: response.myCreditCard} })
        .then(user => {
            return user;
        });
}

async function changeInfo(user: any) {
    const { username, firstName, lastName, email, password } = user;
    const creditCard = user.creditCard;
    const body = {user: { username, firstName, lastName, email, password}, creditCard: creditCard }
    let config: any = {
        method: "put",
        headers: { "Authorization": user.token },
        withCredentials: true
    }
    return await Axios.put(`${api_url}/userinfo`, body, config)
        .then((res) => { console.log(res); return res; })
        .then(handleAxiosResponse)
        .then(response => {return  {...response.data.myUser, creditCard: response.data.myCreditCard} })
        .then(user => {
            return user;
        });

}

async function handleResponse(response: any) {

    if (!response.ok) {
        if (response.status === 401) {
            alert('Token invalid!');
        }
        const error = response && (response.message || response.statusText);
        return Promise.reject(error);
    }
    return response;
}

async function handleAxiosResponse(response: any) { 
    if (response.status !== 200) {
        if (response.status === 401) {
            alert('Token invalid!');
        }
        const error = response && (response.message || response.statusText);
        return Promise.reject(error);
    }
    return response;
}

function logout() {
    console.log('exectuing logout function');
    // remove user from local storage to log user out
    // localStorage.removeItem('user');
}