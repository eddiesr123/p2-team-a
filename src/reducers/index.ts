import { combineReducers } from "redux";
import { navbarReducer } from "./navbar.reducer";
import signupReducer from "./signup.reducer";
import signinReducer from "./signin.reducer";
import userinfoReducer from "./userinfo.reducer";
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

export interface ISignInState {
     user: any; 
     loggingIn: boolean;
     loggedIn: boolean;
     submitted: boolean;
}

export interface IUserState {
    user: any;
}

// Composed state of all substates
// means that to access clicks -> state.clicker.clicks
export interface IState {
    navbar: INavbarState,
    cart: ICartState,
    signup: ISignUpState,
    signin: ISignInState,
    userinfo: IUserState
}


export const state = combineReducers<IState>({
    navbar: navbarReducer,
    cart: cartReducer,
    signup: signupReducer,
    signin: signinReducer,
    userinfo: userinfoReducer
})