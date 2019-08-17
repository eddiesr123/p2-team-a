import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions/user.actions';
import { IState, IUserState, ISignInState } from '../reducers';
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
  signin: ISignInState
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
      updateUser: {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        creditCard: ''
      },
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

  render() {
    const { classes, updateUser} = this.props;
    const { user } = this.props.signin;
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
                  label={user.username}
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
                  value={updateUser.firstname}
                  onChange={this.handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label={this.props.signin.user.firstname}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label={this.props.signin.user.lastname}
                  name="lastName"
                  value={updateUser.lastname}
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
                  label={this.props.signin.user.email}
                  name="email"
                  value={updateUser.email}
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
                  value={this.props.signin.user.password}
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
                  required
                  fullWidth
                  name="creditCard"
                  value={updateUser.creditCard}
                  onChange={this.handleChange}
                  label={this.props.signin.user.creditCard}
                  type="password"
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
  const signin = state.signin;
  const { updateUser, updating, submitted } = state.updateUser;
  return { signin, updateUser, updating, submitted };
}

const actionCreators = {
  changeInfo: userActions.changeInfo,
  logout: userActions.logout
};

export default connect(mapStateToProps, actionCreators)(withStyles(styles)(UserInfo))