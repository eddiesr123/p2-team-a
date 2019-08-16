import { IDisplayState } from ".";

//create initialState variable from the IDisplayState
const initialState: IDisplayState = {};

export const displayReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return initialState;
  }
};
