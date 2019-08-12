const api_url = '';

export const userService = {
    signup,
    signin,
    logout
};

async function signup(user : any) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({ user })
    };

    return await fetch(`${api_url}/auth/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

async function signin(username: any, password: any) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({ username, password })
    };

    return await fetch(`${api_url}/auth/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            user.username = username;
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}


function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response: any) {
    return response.text().then((text: any) => {
        const data = text && JSON.parse(text);
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