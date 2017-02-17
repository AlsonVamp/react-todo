var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation
$(document).foundation();
//App styles
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <p>Boilerplate project</p>,
  document.getElementById('app')
);
