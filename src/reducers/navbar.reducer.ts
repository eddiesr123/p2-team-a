import { navbarTypes } from "../actions/navbar.actions"
import { INavbarState } from ".";


const initialState: INavbarState = {
    cartCount: 0 // # of items in shopping cart
};


export const navbarReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case navbarTypes.CARTCOUNT_UPDATE:
            return {
                ...state,
                cartCount: state.cartCount + action.payload.amount
            }
        default: break;
    }
    return state;
}