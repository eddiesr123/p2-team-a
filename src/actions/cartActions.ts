import {
    ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, GET_PRODUCTS, INPUT_UPDATE, /*ADD_SHIPPING*/
    RESET_STATE,
    INPUT_UPDATE2,
    GET_ORDER
} from './action-types/cart-actions'

//add cart action
export const addToCart = (id: any) => {
    return {
        type: ADD_TO_CART,
        id
    }
}

//remove item action
export const removeItem = (id: any) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity = (id: any) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity = (id: any) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}


export const getProducts = (items: any) => {
    return {
        type: GET_PRODUCTS,
        items
    }
}

export const getOrder = (order: any) => {
    return {
        type: GET_ORDER,
        order
    }
}

export const resetState = () => {
    return {
        type: RESET_STATE
    }
}

export const inputUpdate = (inputValue: any) => {
    return {
        type: INPUT_UPDATE,
        inputValue
    }
}

export const inputUpdate2 = (inputValue2: any) => {
    return {
        type: INPUT_UPDATE2,
        inputValue2
    }
}
