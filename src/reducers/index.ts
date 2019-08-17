import { combineReducers } from "redux";
import { navbarReducer } from "./navbar.reducer";
import signupReducer from "./signup.reducer";
import signinReducer from "./signin.reducer";
import cartReducer from "./cartReducer";
import { displayReducer } from "./displayReducer";
import { catalogReducer } from "./catalog.reducer";
import updateReducer from './update.reducer';

export interface INavbarState {
    cartCount: number
};

export interface ICartState {
    items: any;
    addedItems: any[];
    total: number;
    totalItems: number;
    checkedBox: boolean;
    stateCheck: boolean;
};

export interface ISignUpState {
    user: any;
    signuping: boolean;
    submitted: boolean;
};

export interface IDisplayState {
};

export interface ISignInState {
    user: {
        username: string,
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        creditCard: any
    };
    loggingIn: boolean;
    loggedIn: boolean;
    submitted: boolean;
}

export interface IUserState {
    updateUser: {
        username: string,
        firstName: string,
        lastName: string,
        email: string,
        password: string,
    creditCard: {
        number: string,
        address: string,
        securityCode: string,
        expiration: string
    }
},
    updating: boolean,
    updated: boolean,
    submitted: boolean
}


export interface ICatalogState {
    gloves: any,
    mask: any,
    suit: any
};


// Composed state of all substates
// means that to access clicks -> state.clicker.clicks
export interface IState {
    navbar: INavbarState,
    cart: ICartState,
    signup: ISignUpState,
    signin: ISignInState,
    display: IDisplayState,
    catalog: ICatalogState,
    updateUser: IUserState
};

export const state = combineReducers<IState>({
    navbar: navbarReducer,
    cart: cartReducer,
    signup: signupReducer,
    signin: signinReducer,
    display: displayReducer,
    catalog: catalogReducer,
    updateUser: updateReducer
});