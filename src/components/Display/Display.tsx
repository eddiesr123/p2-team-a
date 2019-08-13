import React from "react";
import { Bodysuit } from "./Bodysuit";
import { Mask } from "./Mask";
import { Gloves } from "./Gloves";
import { IDisplayState } from "../../reducers";

export interface IDisplayProps {
  display: IDisplayState;
}

function Display() {
  return (
    <div id="display-id">
      <Bodysuit />
      <Mask />
      <Gloves />
    </div>
  );
}

export default Display;
