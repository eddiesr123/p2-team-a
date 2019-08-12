import { combineReducers } from "redux";
import { navbarReducer } from "./navbar.reducer";
import signupReducer from "./signup.reducer";
import cartReducer from "./cartReducer";


export interface INavbarState {
    cartCount: number
};

export interface ICartState {
        items: {
            id: number;
            title: string;
            desc: string;
            price: number;
            img: string;
        }[];
        addedItems: any[];
        total: number;

};

export interface ISignUpState {
     user: any;
     submitted: boolean;
}

// Composed state of all substates
// means that to access clicks -> state.clicker.clicks
export interface IState {
    navbar: INavbarState,
    cart: ICartState,
    signup: ISignUpState
}


export const state = combineReducers<IState>({
    navbar: navbarReducer,
    cart: cartReducer,
    signup: signupReducer
})