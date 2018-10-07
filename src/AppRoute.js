import React, {Component} from 'react';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import Register from './components/register/Register';
import Login from './components/login/Login';
import App from './App';
import { withRouter } from 'react-router-dom';


class AppRoute extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route   path="/login" component={Login} />
        </Switch>
        <Switch><Route  path="/register" component={Register} /></Switch>
      </div>
    )
  }
}

export default AppRoute;