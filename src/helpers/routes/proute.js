import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import fb from '../firebase/fb'

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    if (fb.isLoggedIn()){}
      this.isAuthenticated = true
    } else {
    this.isAuthenticated = false
    }
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const Proute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props} />
    ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
  )} />
)

export default Proute;
