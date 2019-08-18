

import React from 'react';
import { Theme, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { IState } from '../../reducers';


const styles = (theme: Theme) => withStyles({
  root: {
    listItem: {
      padding: theme.spacing(1, 0),
    },
    total: {
      fontWeight: 700,
    },
    title: {
      marginTop: theme.spacing(2),
    },
  },
});


class Review extends React.Component<any> {

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Order summary
        </Typography>
        <List disablePadding>
          {this.props.items.map((item: any) => (
            <ListItem className={classes.listItem} key={item.id}>
              <ListItemText primary={item.name} secondary={item.clothingType} />
              <i>Quantity:</i><ListItemText primary={item.quantity} />
              <Typography variant="body2">${item.price}</Typography>
            </ListItem>
          ))}
          <ListItem className={classes.listItem}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" className={classes.total}>
              ${this.props.total}
            </Typography>
          </ListItem>
        </List>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Shipping
            </Typography>
            <Typography gutterBottom>{this.props.shipping.firstName + ' ' + this.props.shipping.lastName}</Typography>
            <Typography gutterBottom>{this.props.shipping.address1}</Typography>
            <Typography gutterBottom>{this.props.shipping.address2}</Typography>
            <Typography gutterBottom>{this.props.shipping.city}, {this.props.shipping.state}, {this.props.shipping.zip}</Typography>
            <Typography gutterBottom>{this.props.shipping.country}</Typography>
          </Grid>
          <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Payment details
            </Typography>
            <Grid container>
                <React.Fragment key={this.props.payment.cardName}>
                    <Typography gutterBottom>Name: {this.props.payment.cardName}</Typography>
                    <Typography gutterBottom>Credit Card: {this.props.payment.cardNumber}</Typography>
                    <Typography gutterBottom>Exp. Date: {this.props.payment.expDate}</Typography>
                </React.Fragment>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    items: state.cart.addedItems,
    addedItems: state.cart.addedItems,
    total: state.cart.total,
    shipping: state.cart.shipping,
    payment: state.cart.payment
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Review))