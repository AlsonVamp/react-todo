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
        expect(typeof todoApp.state.todos[0].createdAt).toBe("number");
    })
    it('should toggle completed status when handleToggle called', () => {
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({
            todos: [{
                id: 1,
                completed: false,
                text: 'test',
                createdAt: 0,
                completedAt: undefined
            }]
        });
        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(1);
        expect(todoApp.state.todos[0].completed).toBe(true);
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
        todoApp.handleToggle(1);
        expect(todoApp.state.todos[0].completed).toBe(false);
    })
    it('should set completedAt to undefined when todo is not completed', () => {
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({
            todos: [{
                id: 1,
                completed: true,
                text: 'test',
                createdAt: 0,
                completedAt: 60
            }]
        });
        expect(todoApp.state.todos[0].completed).toBe(true);
        todoApp.handleToggle(1);
        expect(todoApp.state.todos[0].completed).toBe(false);
        expect(todoApp.state.todos[0].completedAt).toNotExist();
    })
})