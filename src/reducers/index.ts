import { combineReducers } from "redux";
import { navbarReducer } from "./navbar.reducer";
import signupReducer from "./signup.reducer";
import signinReducer from "./signin.reducer";
import cartReducer from "./cartReducer";
import { displayReducer } from "./displayReducer";
import { catalogReducer } from "./catalog.reducer";
import { alertReducer } from './alert.reducer';
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

    shipping: {
        firstName: string;
        lastName: string;
        address1: string;
        address2: string;
        city: string;
        state: string;
        zip: string;
        country: string;
    };
    payment: {
        cardName: string;
        cardNumber: string;
        expDate: string;
        cvv: string;
    };
        inputValue: any;
        order: {};
    
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

export interface IAlertState { 
    type: any,
    message: String
}
// Composed state of all substates
// means that to access clicks -> state.clicker.clicks
export interface IState {
    navbar: INavbarState,
    cart: ICartState,
    signup: ISignUpState,
    signin: ISignInState,
    display: IDisplayState,
    catalog: ICatalogState,
    updateUser: IUserState,
    alert: IAlertState
};

export const state = combineReducers<IState>({
    navbar: navbarReducer,
    cart: cartReducer,
    signup: signupReducer,
    signin: signinReducer,
    display: displayReducer,
    catalog: catalogReducer,
    updateUser: updateReducer,
    alert: alertReducer
});