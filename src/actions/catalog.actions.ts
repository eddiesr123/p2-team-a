import { catalogConstants } from '../constants/catalog.constants';

export const catalogActions = {
    updateSuit,
    updateMask,
    updateGloves
};

function add(message: any) {
    return { type: catalogConstants.ADD, message };
}

function view(message: any) {
    return { type: catalogConstants.VIEW, message };
}

function updateSuit(image: any) {
    return { type: catalogConstants.UPDATE_SUIT,image };
}
function updateMask(image: any) {
    return { type: catalogConstants.UPDATE_MASK,image };
}
function updateGloves(image: any) {
    return { type: catalogConstants.UPDATE_GLOVES,image };
}
function updateDisplay(image:any, props: any){
    console.log(props);
}