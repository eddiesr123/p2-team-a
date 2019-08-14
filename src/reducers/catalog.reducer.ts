import { catalogConstants } from '../constants/catalog.constants';
import { ICatalogState } from '.';


const initialState: ICatalogState = {
    gloves:'',
    mask:'',
    suit:'../../images/alphas/bodysuit-green-female.png',
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
            console.log(action);
          return {
              ...state,suit: action.image///payload.suit
          };
        default:
          return state
      }
}
