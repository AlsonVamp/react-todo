var React = require('react');
var ReactDOM = require('react-dom');
var { hashHistory } = require('react-router');
var { Provider } = require('react-redux');
import firebase from 'app/firebase/'

var actions = require('actions');
var store = require('configureStore').configure();
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.id));
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
})

store.dispatch(actions.startAddTodos());
//Load foundation
$(document).foundation();
//App styles
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
