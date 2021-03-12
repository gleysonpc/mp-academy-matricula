import { Route, Redirect, RouteProps } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

function PrivateRoute({ children, ...rest }: RouteProps) {
  let { auth } = useAuth()
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute