const api_url = '';

export const orderService = {
    getOrdersById
};

async function getOrdersById(userid : any) {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({ userid })
    };

    return await fetch(`${api_url}/userinfo`, requestOptions).then(handleResponseFetch);
}

async function handleResponseFetch(response : any) {
    const orders = await response.json();
    if (!response.ok) {
        if (response.status === 404) {
           
        }

        const error = (response && response.message) || response.statusText;
        return Promise.reject(error);
    }
    return orders;
}