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
        <Bodysuit suit = {this.props.suit} />
        <Mask mask = {this.props.mask} />
        <Gloves gloves = {this.props.gloves} />
        <span>{this.props.total}</span>
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
