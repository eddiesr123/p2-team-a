import React from "react";
import { Bodysuit } from "./Bodysuit";
import { Mask } from "./Mask";
import { Gloves } from "./Gloves";
import { IDisplayState } from "../../reducers";
import { any } from "prop-types";

export interface IDisplayProps {
  display: IDisplayState;
}

export class Display extends React.Component<any, IDisplayProps> {
  render() {
    return (
      <div id="display-id">
        <Bodysuit />
        <Mask />
        <Gloves />
      </div>
    );
  }
}

export default Display;
