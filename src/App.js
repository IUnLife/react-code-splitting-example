import React, { Component } from 'react';
import { Route, Redirect, withRouter } from "react-router-dom";
import './App.css';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Lists from './components/Lists/Lists';
import PluggableTodo from './components/PluggableTodo/PluggableTodo';



class App extends Component {
  render() {
    const { pathname } = this.props.location;
    return (
      <div>
        {pathname === '/' ? <Redirect to="login" /> : ''}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/lists" component={Lists} />
        <PrivateRoute path="/lists/:id" component={PluggableTodo} />
      </div>
    );
  }
}

export default withRouter(App);
