import React from "react";
import { Bodysuit } from "./Bodysuit";
import { Mask } from "./Mask";
import { Gloves } from "./Gloves";
import { IDisplayState, IState } from "../../reducers";
import { any } from "prop-types";
import { connect } from "react-redux";


export interface IDisplayProps {
  display: IDisplayState;
}

export class Display extends React.Component<any, IDisplayProps> {
  render() {
    return (
      <div id="display-id">
        <Bodysuit suit = {'./src/images/alphas/bodysuit-green-female.png'} />
        <Mask mask = {'./src/images/alphas/mask-green-female.png'} /> 
        <Gloves gloves = {'./src/images/alphas/gloves-female.png'} />
        <span>{this.props.suit}</span>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    display: state.display,
    suit: state.catalog.suit,
    mask: state.catalog.mask,
    gloves: state.catalog.gloves,
    total: state.cart.totalItems

  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);
