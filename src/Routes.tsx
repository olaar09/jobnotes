import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import Dashboard from 'containers/Dashboard/Dashboard';
import Login from 'containers/Auth/Login/Login';
import Register from 'containers/Auth/Register/Register';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact={true} path="/" component={Dashboard} />
        <Route path="/*" render={() => <div>Not found</div>} />
      </Switch>
    );
  }
}
