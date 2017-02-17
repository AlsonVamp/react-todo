var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                { id: 1, text: 'Do homework' },
                { id: 2, text: 'Take a walk' },
                { id: 3, text: 'Make dinner' },
                { id: 4, text: 'Play guitar' }
            ]
        }
    },
    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos} />
            </div>
        )
    }
});

module.exports = TodoApp;