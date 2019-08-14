import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions/user.actions';
import { ordersActions } from '../actions/orders.actions';
import { IState, IUserState } from '../reducers';
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  paper:{
    margin: 10,
  },
  form: {
    width: 'auto', // Fix IE 11 issue.
    marginTop: 10,
  } 
  };

export interface IUserProps {
    // read in data from state store
    userinfo: IUserState,
    orders: any,
    user: any,
    name: any,
    classes: any
}

class UserInfo extends React.Component<any, IUserState> {
  constructor(props: any) {
    super(props);

    this.state = {
      user: {
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        cardnumber: '' 
      }
    }
}

componentDidMount() {
  this.props.userinfo(this.props.user.userid);
  // this.props.getOrdersById(this.props.orders.userid);
}

render() {
  const dividerFullWidth = {
    marginLeft: '0.5px'
  }
  const { orders, classes } = this.props;
return (
  <div className="container">
    <div className="container">
              <div><h2>Personal information:</h2></div>
              <div style={{ marginTop: '-18px', marginBottom: '6px', textAlign: 'center' }}>
                <List style={{ display: 'inline-block' }}>
                  <ListItem>
                    <ListItemText primary="Username" secondary={this.state.user.username} />
                  </ListItem>
                  <Divider variant="inset" component="li" style={dividerFullWidth} />
                  <ListItem>
                    <ListItemText primary="Full name" secondary={`${this.state.user.firstName} ${this.state.user.lastName}`} />
                  </ListItem>
                  <Divider variant="inset" component="li" style={dividerFullWidth} />
                  <ListItem>
                    <ListItemText primary="Email" secondary={this.state.user.email} />
                  </ListItem>
                  <Divider variant="inset" component="li" style={dividerFullWidth} />
                  <ListItem>
                    <ListItemText primary="Cardnumber" secondary={this.state.user.cardnumber} />
                  </ListItem>
                  <Divider variant="inset" component="li" style={dividerFullWidth} />
                </List>
              </div>
    </div>        
    <div className="container">
     {/*<h2>Your orders:</h2>
     <Paper className={classes.paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Orders</TableCell>
            <TableCell align="right">Costum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.items.map((order : any) => (
            <TableRow key={order.name}>
              <TableCell component="th" scope="row">
                {order.name}
              </TableCell>
              <TableCell align="right">{order.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
          </Paper>*/} 
    </div> 
  </div>  
  );
}
}

function mapStateToProps(state: IState) {
  const { user } = state.userinfo;
  return { user };
}

const actionCreators = {
  userinfo: userActions.userinfo,
  orders: ordersActions.getOrdersById,
  logout: userActions.logout
};

export default connect(mapStateToProps, actionCreators)(withStyles(styles)(UserInfo))