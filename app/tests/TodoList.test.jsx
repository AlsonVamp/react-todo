var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });
    it('should render one Todo component for each todo item', () => {
        var todos = [
            { id: 1, text: "test text 1" },
            { id: 2, text: 'test text 2' }
        ];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)
        expect(todosComponents.length).toBe(todos.length);
    })
    it('should render empty message if no todos to show', () => {
        var todos = [];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        var el = TestUtils.findRenderedDOMComponentWithClass(todoList, 'container__message')
        expect(el).toExist();
    })
})