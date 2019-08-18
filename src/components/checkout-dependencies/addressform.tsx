import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import { inputUpdate } from '../../actions/cartActions';
import { IState } from '../../reducers';

class AddressForm extends React.Component<any> {

 
handleInputChange(event: any) {
    const input = event.target;
    this.props.inputUpdate(input);
}

render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Shipping address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="fname"
              onChange={(event: any) => this.handleInputChange(event)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="lname"
              onChange={(event: any) => this.handleInputChange(event)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="billing address-line1"
              onChange={(event: any) => this.handleInputChange(event)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="billing address-line2"
              onChange={(event: any) => this.handleInputChange(event)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="billing address-level2"
              onChange={(event: any) => this.handleInputChange(event)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="state" 
            name="state" 
            label="State/Province/Region" fullWidth 
            onChange={(event: any) => this.handleInputChange(event)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="billing postal-code"
              onChange={(event: any) => this.handleInputChange(event)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="billing country"
              onChange={(event: any) => this.handleInputChange(event)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Use this address for payment details"
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
    shipping: state.cart.shipping
  }
}

const mapDispatchToProps = (dispatch: any) => {

  return {
    inputUpdate: (inputValue: any) => { dispatch(inputUpdate(inputValue))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressForm);