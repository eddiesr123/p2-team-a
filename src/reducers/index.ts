import { combineReducers } from "redux";
import { navbarReducer } from "./navbar.reducer";
import cartReducer from "./cartReducer";


export interface INavbarState {
    cartCount: number
};

export interface ICartState {
    items: [
        {
            id: number,
            title:string, 
            desc: string, 
            price:number,
            img: any
        },
    ],
    addedItems:any,
    total: number
};

// Composed state of all substates
// means that to access clicks -> state.clicker.clicks
export interface IState {
    navbar: INavbarState,
    cart: ICartState
}


export const state = combineReducers<IState>({
    navbar: navbarReducer,
    cart: cartReducer
})