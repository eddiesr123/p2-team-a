import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { inputUpdate2 } from '../../actions/cartActions';

class PaymentForm extends React.Component<any> {

  handleInputChange(event: any) {
    const input = event.target;
    this.props.inputUpdate2(input);
}


  render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Payment method
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField required id="cardName" name="cardName" label="Name on card" fullWidth
            onChange={(event: any) => this.handleInputChange(event)} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="cardNumber" name="cardNumber" label="Card number" fullWidth
            onChange={(event: any) => this.handleInputChange(event)} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="expDate" name="expDate" label="Expiry date" fullWidth
            onChange={(event: any) => this.handleInputChange(event)} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              name="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth onChange={(event: any) => this.handleInputChange(event)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="yes" />}
              label="Remember credit card details for next time"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    items: state.cart.items,
    payment: state.cart.payment
  }
}

const mapDispatchToProps = (dispatch: any) => {

  return {
    inputUpdate2: (inputValue2: any) => { dispatch(inputUpdate2(inputValue2))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm);