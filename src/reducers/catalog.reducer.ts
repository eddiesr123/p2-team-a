import { catalogConstants } from '../constants/catalog.constants';
import { ICatalogState } from '.';


const initialState: ICatalogState = {
    gloves:'../../images/alphas/gloves-female.png',
    mask:'../../images/alphas/mask-black-female.png',
    suit:'../../images/alphas/bodysuit-green-female.png',
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
