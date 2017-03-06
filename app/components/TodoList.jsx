import React from 'react';
import { connect } from 'react-redux';
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');


export class TodoList extends React.Component {
    render() {
        var { todos, showCompleted, searchText } = this.props;
        var unfinishedTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        if (unfinishedTodos.length == 0) {
            return (<p className="container__message">Nothing To Do</p>);
        }
        var renderTodos = () => {
            return unfinishedTodos.map((todo) => {
                return <Todo key={todo.id} {...todo} />
            })
        }
        return <div>{renderTodos()}</div>
    }
}

export default connect(
    (state) => {
        return state;
    }
)(TodoList);