import * as React from 'react';
import {Redirect, Route } from 'react-router';

const PrivateRoute = ({component, loggedIn, ...rest}: any) => {
  const routeComponent = (props: any) => (
          loggedIn
          ? React.createElement(component, props)
          : <Redirect to={{pathname: '/login'}}/>
  );
  return <Route {...rest} render={routeComponent}/>;
};

export default PrivateRoute;