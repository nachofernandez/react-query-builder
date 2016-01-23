import './reset.scss';
import './styles.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createHistory } from 'history';
import { Router, Route, Redirect } from 'react-router';
import Demo from './demo';

window.React = React;

class App extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

ReactDOM.render((
  <Router history={createHistory()}>
    <Redirect from="/" to="demo" />
    <Route name="root" path="/" component={App}>
      <Route name="demo" path="/demo" component={Demo} />
    </Route>
  </Router>
), document.getElementById("container"));
