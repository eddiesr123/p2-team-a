import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions/user.actions';
import { IState, IUserState } from '../reducers';
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
    updateUser: IUserState,
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

      this.state = {
        updateUser: this.props.user,
        updating: false,
        submitted: false
      }
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    const { name, value } = event.target;
    const { updateUser } = this.state;
    this.setState({
        updateUser: {
        ...updateUser,
        [name]: value
      }
    });
  }
  
  handleSubmit(event: any) {
    event.preventDefault();
    //this.setState({ submitting: true });
    const { updateUser } = this.state;
    if (updateUser.username && updateUser.firstName && updateUser.lastName && updateUser.email && updateUser.password && updateUser.creditCard) {
        this.props.changeInfo(updateUser);
    }
  }

  render(){
  const { classes, user} = this.props;
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
                id="username"
                label="Username"
                name="username"
                value={updateUser.username}
                onChange={this.handleChange}
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                value={updateUser.firstName}
                onChange={this.handleChange}
                variant="outlined"
                fullWidth
                id="firstName"
                label="First name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last name"
                name="lastName"
                value={updateUser.lastName}
                onChange={this.handleChange}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email"
                name="email"
                value={updateUser.email}
                onChange={this.handleChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                value={updateUser.password}
                onChange={this.handleChange}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="creditCard"
                value={updateUser.creditCard}
                onChange={this.handleChange}
                label="Credit number"
                id="creditCard"
                autoComplete="creditCard"
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
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}
}

function mapStateToProps(state: IState) {
       const { user, submitted } = state.signin;
   return { user, submitted };
 }

 const actionCreators = {
       changeInfo: userActions.changeInfo
 };

export default connect(mapStateToProps, actionCreators)(withStyles(styles)(UserInfo))