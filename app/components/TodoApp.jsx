var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                { id: uuid(), text: 'Do homework' },
                { id: uuid(), text: 'Take a walk' },
                { id: uuid(), text: 'Make dinner' },
                { id: uuid(), text: 'Play guitar' }
            ]
        }
    },
    handleAddTodo: function (newTodoText) {
        this.setState({
            todos: [...this.state.todos, {
                text: newTodoText,
                id: uuid()
            }]
        })
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos} />
                <AddTodo onAdd={this.handleAddTodo} />
            </div>
        )
    }
});

module.exports = TodoApp;