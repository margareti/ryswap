import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Aeroplane from './components/aeroplane/Aeroplane';

class AppRoute extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
          <Route path='/flight/:id' component={Aeroplane} />
        </Switch>
      </div>
    );
  }
}

export default AppRoute;
