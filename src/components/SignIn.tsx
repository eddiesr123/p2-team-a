import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions/user.actions';
import { IState, ISignInState } from '../reducers';
import Skull from '../Login.png';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
    marginTop: 10
  }
};

export interface ISignInProps {
  // read in data from state store
  signin: ISignInState,
  user: any,
  name: any,
  classes: any
}

class SignIn extends React.Component<any, ISignInState> {
  constructor(props: any) {
    super(props);

    // reset login status
    this.props.logout();

    this.state = {
      user: {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        creditCard: ''
    },
      loggingIn: false,
      loggedIn: false,
      submitted: false
    };

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
    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.username && user.password) {
      this.props.signin(user) 
    }
  }

  render() {
    const { loggingIn, classes } = this.props;
    const { user } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <div>
          <Grid container justify="center" alignItems="center">
            <Avatar src={Skull} className={classes.avatar} />
          </Grid>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5" align="center">
              Sign in
        </Typography>
          </div>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={user.password}
              onChange={this.handleChange}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
          </Button>
            {loggingIn}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
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
  const { user, loggedIn, loggingIn, submitted } = state.signin;
  return { user, loggedIn, loggingIn, submitted };
}

const actionCreators = {
  signin: userActions.signin,
  logout: userActions.logout
};

export default connect(mapStateToProps, actionCreators)(withStyles(styles)(SignIn))