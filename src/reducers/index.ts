import { combineReducers } from "redux";
import { navbarReducer } from "./navbar.reducer";


export interface INavbarState {
    cartCount: number
};

// Composed state of all substates
// means that to access clicks -> state.clicker.clicks
export interface IState {
    navbar: INavbarState,
}

export const state = combineReducers<IState>({
    navbar: navbarReducer
})