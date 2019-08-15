import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions/user.actions';
import { IState, ISignUpState } from '../reducers';
import Skull from '../SignUp.png';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

export interface ISignUpProps {
  // read in data from state store
  signup: ISignUpState,
  user: any,
  name: any,
  classes: any
}


class SignUp extends React.Component<any, ISignUpState> {
  constructor(props: any) {
    super(props);

    this.state = {
      user: {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      signuping: false,
      submitted: false
    }

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

  async handleSubmit(event: any) {
    event.preventDefault(); //prevents text from being cleared
    this.setState({ ...this.state, submitted: true });
    const { user } = this.state;
    if (user.username && user.firstName && user.lastName && user.email && user.password) {
      this.props.signup(user);
    }
  }

  render() {
    const { signuping, classes } = this.props;
    const { user } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <div>
          <Grid container justify="center" alignItems="center">
            <Avatar src={Skull} className={classes.avatar} />
          </Grid>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5" align="center">
              Sign up
        </Typography>
          </div>
          <form className={classes.form} onSubmit={this.handleSubmit}>
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
                  autoFocus
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
              Sign Up
            </Button>
            {signuping}
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
              </Link>
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
  const { user, signuping, submitted } = state.signup;
  return { user, signuping, submitted };
}

const actionCreators = {
  signup: userActions.signup,
};

export default connect(mapStateToProps, actionCreators)(withStyles(styles)(SignUp))