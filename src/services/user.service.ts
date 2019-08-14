const api_url = 'http://localhost:8080/users';

export const userService = {
    signup,
    signin,
    changeInfo,
    logout
};

async function signup(user : any) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({ user })
    };

    return await fetch(`${api_url}/signup`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

async function signin(user: any) {
    const {username, password} = user;
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({ username, password })
    };

    return await fetch(`${api_url}/signin`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

async function changeInfo(user: any) {
    const requestOptions = {
        method: 'UPDATE',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({ user })
    };

    return await fetch(`${api_url}/userinfo`, requestOptions).then(handleResponseFetch);
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

async function handleResponse(response: any) {
    const user = await response.json();
    console.log(user.headers);
    if (!response.ok) {
        if (response.status === 404) {
            // auto logout if 404 response returned from api
            logout();  
        }

        const error = (response && response.message) || response.statusText;
        return Promise.reject(error);
    }
    return user;
}

async function handleResponseFetch(response : any) {
    const user = await response.json();
    if (!response.ok) {
        if (response.status === 404) {
           
        }

        const error = (response && response.message) || response.statusText;
        return Promise.reject(error);
    }
    return user;
}