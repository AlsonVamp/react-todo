var React = require('react');
var expect = require('expect');
var TodoApp = require('TodoApp');
var TestUtils = require('react-addons-test-utils');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    })
    it('should add todo to the todos state on handleAddTodo', () => {
        var todoText = 'Simple test text';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({ todos: [] });
        todoApp.handleAddTodo(todoText);
        expect(todoApp.state.todos[0].text).toBe(todoText);
    })
    it('should toggle completed status when handleToggle called', () => {
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({ todos: [{ id: 1, completed: false, text: 'test' }] });
        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(1);
        expect(todoApp.state.todos[0].completed).toBe(true);
        todoApp.handleToggle(1);
        expect(todoApp.state.todos[0].completed).toBe(false);
    })
})