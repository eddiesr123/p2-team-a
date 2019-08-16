import React from 'react';
import { connect } from 'react-redux';
import { resetState } from '../../actions/cartActions';
import { IState } from '../../reducers';
import { Button } from '@material-ui/core';

class Submit extends React.Component<any>{

    
    handleClick = ()=>{
        this.props.resetState();
        localStorage.removeItem('reduxPersist:cart');
    }

    render(){
  
        return(
                <Button style={{WebkitTextFillColor:"white"}} onClick={this.handleClick}>Place order</Button>
        );
    }
}

const mapStateToProps = (state: IState)=>{
    return{
        addedItems: state.cart.addedItems,
        total: state.cart.total,
        checked: state.cart.checkedBox
    }
}

const mapDispatchToProps = (dispatch: any)=>{

    return{
        resetState: () => {dispatch(resetState())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Submit)