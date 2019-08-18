import { catalogConstants } from '../constants/catalog.constants';
import { ICatalogState } from '.';


const initialState: ICatalogState = {
    gloves:'../../images/defaults/empty-female-gloves.png',
    mask:'../../images/defaults/empty-female-mask.png',
    suit:'../../images/alphas/bodysuit-silo-female.png',
};
export const catalogReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case catalogConstants.UPDATE_MASK:
          return {
            ...state,mask: action.image
          };
        case catalogConstants.UPDATE_GLOVES:
          return {
            ...state,gloves: action.image
          };
        case catalogConstants.UPDATE_SUIT:
            console.log(action);
          return {
              ...state,suit: action.image
          };
        default:
          return state
      }
}
