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
        .then((res) => {console.log(res); return res;})
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
        .then(user => {
            return user;
        });
}

async function changeInfo(user: any) {
    const { username, firstName, lastName, email, password } = user;
    const requestOptions = {
        method: 'UPDATE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, firstName, lastName, email, password })
    };

    return await fetch(`${api_url}/userinfo`, requestOptions)
        .then(handleResponse)
        .then(response => response.json())
        .then(user => {
            return user;
    });

}

async function handleResponse(response: any) {

    if (!response.ok) {
        if (response.status === 404) {
            // auto logout if 404 response returned from api
            logout();
        }
        const error = response && (response.message || response.statusText);
        return Promise.reject(error);
    }
    return response;
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}