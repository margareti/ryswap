import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Home from './components/home/Home';

class AppRoute extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
        </Switch>
        <Switch>
          <Route path="/register" component={Register} />
        </Switch>
        <Route path="/home" component={Home} />
      </div>
    );
  }
}

export default AppRoute;
