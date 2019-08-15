import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,GET_PRODUCTS,/*ADD_SHIPPING*/
RESET_STATE} from './action-types/cart-actions'
import { alertActions } from './alert.actions';

//add cart action
export const addToCart= (id: any)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}

//remove item action
export const removeItem=(id: any)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id: any)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id: any)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}


export const getProducts=(items: any) => {
    return{
        type: GET_PRODUCTS,
        items
    }
}

export const resetState=()=>{
    return{
        type: RESET_STATE
    }
}


/*
export const getProducts =
    (id: number, name: string, price: number, imgPath: string, thumbnailPath: string, clothingType: string, user: string) => (dispatch: any) => {
        dispatch({
            payload: {
                id, name, price, imgPath, thumbnailPath, clothingType, user
            },
            type: GET_PRODUCTS
        });
    }
    */
