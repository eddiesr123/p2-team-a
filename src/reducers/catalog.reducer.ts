import { catalogConstants } from '../constants/catalog.constants';
import { ICatalogState } from '.';

const initialState: ICatalogState = {
    gloves:'../../images/alphas/bodysuit-red-male.png',
    mask:'../../images/alphas/mask-red-male.png',
    suit:'../../images/alphas/gloves-male.png',
};
export const catalogReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case catalogConstants.UPDATE_MASK:
          return {
            ...state,mask: action.payload.mask
          };
        case catalogConstants.UPDATE_GLOVES:
          return {
            ...state,gloves: action.payload.gloves
          };
        case catalogConstants.UPDATE_SUIT:
          return {
              ...state,suit: action.payload.suit
          };
        default:
          return state
      }
}
