import { catalogConstants } from '../constants/catalog.constants';
import { ICatalogState } from '.';

const initialState: ICatalogState = {
    gloves:'',
    mask:'',
    suit:'',
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
