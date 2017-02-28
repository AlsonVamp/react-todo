var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');

import { configure } from 'configureStore';
import ConnectedTodoList, { TodoList } from 'TodoList';
import ConnectedTodo, { Todo } from 'Todo';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });
    it('should render one Todo component for each todo item', () => {
        var todos = [
            {
                id: 1,
                text: "test text 1",
                completed: false,
                completedAt: undefined,
                createdAt: 500
            },
            {
                id: 2,
                text: 'test text 2',
                completed: false,
                completedAt: undefined,
                createdAt: 500
            }
        ];
        var store = configure({
            todos: todos
        });
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList />
            </Provider>
        )
        var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo)
        expect(todosComponents.length).toBe(todos.length);
    })
    it('should render empty message if no todos to show', () => {
        var todos = [];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        var el = TestUtils.findRenderedDOMComponentWithClass(todoList, 'container__message')
        expect(el).toExist();
    })
})