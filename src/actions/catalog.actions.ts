import { catalogConstants } from '../constants/catalog.constants';

export const catalogActions = {
    updateSuit,
    updateMask,
    updateGloves
};

function updateSuit(image: any) {
    return { type: catalogConstants.UPDATE_SUIT,image };
}
function updateMask(image: any) {
    return { type: catalogConstants.UPDATE_MASK,image };
}
function updateGloves(image: any) {
    return { type: catalogConstants.UPDATE_GLOVES,image };
}
