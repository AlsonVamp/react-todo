var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');


import TodoApp from 'TodoApp';
var TodoAPI = require('TodoAPI');
var actions = require('actions');
var store = require('configureStore').configure();
import Login from 'Login';

store.dispatch(actions.startAddTodos());
//Load foundation
$(document).foundation();
//App styles
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" >
        <Route path='todos' component={TodoApp} />
        <IndexRoute component={Login} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
