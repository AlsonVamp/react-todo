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
                { id: uuid(), text: 'Do homework', completed: true },
                { id: uuid(), text: 'Take a walk', completed: false },
                { id: uuid(), text: 'Make dinner', completed: true },
                { id: uuid(), text: 'Play guitar', completed: false }
            ]
        }
    },
    handleAddTodo: function (newTodoText) {
        this.setState({
            todos: [...this.state.todos, {
                text: newTodoText,
                id: uuid(),
                completed: false
            }]
        })
    },
    handleToggle: function (id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
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
                <TodoList todos={todos} onToggle={this.handleToggle} />
                <AddTodo onAdd={this.handleAddTodo} />
            </div>
        )
    }
});

module.exports = TodoApp;