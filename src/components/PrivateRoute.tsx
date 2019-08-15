import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  component: any;
  loggedIn: boolean;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, loggedIn, ...rest } = props;
  return (
      <Route
          {...rest}
          render={(routeProps) =>
                loggedIn ? (
                  <Component {...routeProps} />
              ) : (
                      <Redirect
                          to={{
                              pathname: '/',
                              state: { from: routeProps.location }
                          }}
                      />
                  )
          }
      />
  );
};

export default PrivateRoute;