import { combineReducers } from "redux";
import { navbarReducer } from "./navbar.reducer";
import signupReducer from "./signup.reducer";
import cartReducer from "./cartReducer";
import { displayReducer } from "./displayReducer"; 
import { catalogReducer } from "./catalog.reducer";



export interface INavbarState {
    cartCount: number
};

export interface ICartState {
        items: {
        }[];
        addedItems: any[];
        total: number;
        totalItems: number;
        checkedBox: boolean;
        stateCheck: boolean;

};

export interface ISignUpState {
     user: any;
     submitted: boolean;
};

export interface IDisplayState {
};

export interface ICatalogState {
    gloves:any,
    mask:any,
    suit:any
};
// Composed state of all substates
// means that to access clicks -> state.clicker.clicks
export interface IState {
    navbar: INavbarState,
    cart: ICartState,
    signup: ISignUpState,
    display: IDisplayState,
    catalog: ICatalogState
};

export const state = combineReducers<IState>({
    navbar: navbarReducer,
    cart: cartReducer,
    signup: signupReducer,
    display:displayReducer,
   catalog: catalogReducer
});

