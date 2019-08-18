import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions/user.actions';
import { IState } from '../reducers';
import Skull from '../Login.png';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

export interface IUserProps {
  // read in data from state store
  updateUser: any,
  classes: any
}

const styles = {
  avatar: {
    marginTop: 70,
    width: 100,
    height: 100,
  },
  paper: {
    margin: 10,
  },
  form: {
    width: 'auto', // Fix IE 11 issue.
    marginTop: 30,
  },
  button: {
    background: 'rgb(255, 166, 0)'
  }
};

class UserInfo extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      //updateUser: this.props.user,
      updateUser: {
        ...this.props.user,
        creditCard: { ...this.props.user.creditCard }
      },
      updating: false,
      updated: false,
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeCreditCard = this.handleChangeCreditCard.bind(this);
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      updateUser: {
        ...this.state.updateUser,
        ...this.props.user,
        creditCard: { ...this.props.user.creditCard }
      },
    })
  }

  handleChange(event: any) {
    const { name, value } = event.target;
    const { updateUser } = this.state;
    this.setState({
      ...this.state,
      updateUser: {
        ...updateUser,
        [name]: value
      }
    });
  }

  handleChangeCreditCard(event: any) {
    const { name, value } = event.target;
    const updatedCreditCard: any = { ...this.state.updateUser.creditCard }
    updatedCreditCard[name] = value;
    this.setState({
      ...this.state,
      updateUser: {
        ...this.state.updateUser,
        creditCard: updatedCreditCard
      }
    })
  }

  handleSubmit(event: any) {
    event.preventDefault();
    //this.setState({ submitting: true });
    console.log(this.state.updateUser)
    const { updateUser } = this.state;
    if (updateUser.username && updateUser.firstName && updateUser.lastName
      && updateUser.email && updateUser.password) {
      this.props.changeInfo(updateUser);
    }
  }

  render() {
    const { classes } = this.props;
    const { updateUser } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <div>
          <Grid container justify="center" alignItems="center">
            <Avatar src={Skull} className={classes.avatar} />
          </Grid>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5" align="center">
              Personal information
      </Typography>
          </div>
          <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  required
                  id="username"
                  label="Username"
                  name="username"
                  value={updateUser.username}
                  defaultValue={this.props.user.username}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  required
                  value={updateUser.firstName}
                  defaultValue={this.props.user.firstName}
                  onChange={this.handleChange}
                  variant="outlined"
                  fullWidth
                  id="firstName"
                  label={"First name"}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  required
                  id="lastName"
                  label={"Last name"}
                  name="lastName"
                  value={updateUser.lastName}
                  onChange={this.handleChange}
                  defaultValue={this.props.user.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  required
                  id="email"
                  label="Email"
                  name="email"
                  value={updateUser.email}
                  defaultValue={this.props.user.email}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  required
                  name="password"
                  value={updateUser.password}
                  defaultValue={this.props.user.password}
                  onChange={this.handleChange}
                  label="Password"
                  type="password"
                  id="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="number"
                  value={updateUser.creditCard.number}
                  defaultValue={this.props.user.creditCard && this.props.user.creditCard.number}
                  onChange={this.handleChangeCreditCard}
                  label="Credit number"
                  id="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="address"
                  value={updateUser.creditCard.address}
                  defaultValue={this.props.user.creditCard && this.props.user.creditCard.address}
                  onChange={this.handleChangeCreditCard}
                  label="Address"
                  id="address"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="expiration"
                  value={updateUser.creditCard.expiration}
                  defaultValue={this.props.user.creditCard && this.props.user.creditCard.expiration}
                  onChange={this.handleChangeCreditCard}
                  label="Exp"
                  id="expiration"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="securityCode"
                  value={updateUser.creditCard.securityCode}
                  defaultValue={this.props.user.creditCard && this.props.user.creditCard.securityCode}
                  onChange={this.handleChangeCreditCard}
                  label="CVV"
                  type="password"
                  id="securityCode"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Update
            </Button>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
        </Box>
      </Container>
    );
  }
}

function mapStateToProps(state: IState) {
  const { user } = state.signin;
  return { user };
}

const actionCreators = {
  changeInfo: userActions.changeInfo
};

export default connect(mapStateToProps, actionCreators)(withStyles(styles)(UserInfo))