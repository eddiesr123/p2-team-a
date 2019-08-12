import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions/user.actions';
import { IState, ISignUpState } from '../reducers';
import Skull from '../SignUp.png';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Theme, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { userService } from '../services/user.service';

const styles = (theme: Theme) => withStyles({
  root: {
      backgroundColor: theme.palette.common.white,
    },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

export interface ISignUpProps {
  // read in data from state store
  signup: ISignUpState,
  user: any,
  name: any,
  classes: any

  // to do- add items to this interface
  // removeItem: (id: any)=> void;
  // subtractQuantity: (id: any)=> void;
  // addQuantity: (id: any)=> void;
}


class SignUp extends React.Component<any, ISignUpState> {
  constructor(props: any) {
    super(props);

    this.state = {
      user: {
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        password: ''
      },
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


  handleSubmit(event: any) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.username && user.firstname && user.lastname && user.email && user.password) {
      userService.signup(user);
    }
  }

  render() {
    const { signup, classes } = this.props;
    const { user } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Grid container justify="center" alignItems="center">
            <Avatar src={Skull} className={classes.bigAvatar} />
          </Grid>
          <Typography component="h1" variant="h5">
            Sign up
        </Typography>
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
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstname"
                  value={user.firstname}
                  onChange={this.handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
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
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
          {signup}</Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

function mapStateToProps(state: IState) {
  const { user, submitted } = state.signup;
  return { user, submitted };
}

const actionCreators = {
  signup: userActions.signup,
};

export default connect(mapStateToProps, actionCreators)(withStyles(styles)(SignUp))