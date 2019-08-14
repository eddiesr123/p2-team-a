const api_url = 'http://localhost:8080/users';

export const userService = {
    signup,
    signin,
    userinfo,
    logout
};

async function signup(user: any) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user })
    };

    return await fetch(`${api_url}/signin`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

async function userinfo(user: any) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user })
    };


    return await fetch(`${api_url}/userinfo`, requestOptions).then(handleResponseFetch);
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

async function handleResponse(response: any) {
    const data = await response.json();
    console.log(data);
    return response.text().then((text: any) => {
        const data = text && JSON.parse(text);
        console.log(data);

        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

async function handleResponseFetch(response: any) {
    const user = await response.json();
    if (!response.ok) {
        if (response.status === 404) {

        }

        const error = (response && response.message) || response.statusText;
        return Promise.reject(error);
    }
    return user;
}