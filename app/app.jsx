var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});
//Load foundation
$(document).foundation();
//App styles
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
