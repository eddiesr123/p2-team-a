import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions/user.actions';
import { IState, IUserState } from '../reducers';
import Skull from '../SignUp.png';
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
    user: IUserState,
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
    }
  };

class UserInfo extends React.Component<any, IUserState> {
    constructor(props: any) {
      super(props);
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }
  
  handleSubmit(event: any) {
    event.preventDefault();
    //this.setState({ submitting: true });
    const { user } = this.state;
    if (user.username && user.firstName && user.lastName && user.email && user.password && user.creditCard) {
        this.props.changeInfo(user);
    }
  }

  render(){
  const { classes, submitting, user } = this.props;
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
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={user.username}
                onChange={this.handleChange}
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                value={user.firstname}
                onChange={this.handleChange}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={user.lastname}
                onChange={this.handleChange}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={user.email}
                onChange={this.handleChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                value={user.password}
                onChange={this.handleChange}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Update
          </Button>
          {submitting}
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
       changeInfo: userActions.changeInfo,
       logout: userActions.logout
 };

export default connect(mapStateToProps, actionCreators)(withStyles(styles)(UserInfo))