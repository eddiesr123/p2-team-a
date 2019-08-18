import React from "react";
import { Bodysuit } from "./Bodysuit";
import { Mask } from "./Mask";
import { Gloves } from "./Gloves";
import { IDisplayState, IState } from "../../reducers";
import { connect } from "react-redux";

// declaring the type of the props on this component
export interface IDisplayProps {
  display: IDisplayState;
}
// defining the Display component which contains 3 components
export class Display extends React.Component<any, IDisplayProps> {
  render() {
    return (
      <div id="display-id">
        <Bodysuit suit = {this.props.suit} />
        <Mask mask = {this.props.mask} />
        <Gloves gloves = {this.props.gloves} />
      </div>
    );
  }
}
// maps the store information to the components props
const mapStateToProps = (state: IState) => {
  return {
    display: state.display,
    suit: state.catalog.suit,
    mask: state.catalog.mask,
    gloves: state.catalog.gloves,
    total: state.cart.totalItems

  }
}
// declares the actions for this component, but it has no actions
const mapDispatchToProps = {
}
// uses a higher order function to create a version of Display that is connected to the store
export default connect(mapStateToProps, mapDispatchToProps)(Display);
