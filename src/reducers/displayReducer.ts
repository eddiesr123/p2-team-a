import { IDisplayProps } from "../components/Display/Display";
import { emptyStatement } from "@babel/types";
import { IDisplayState } from ".";

//create initialState variable from the IDisplayState
const initialState: IDisplayState = {};

export const displayReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return initialState;
  }
  return state;
};
