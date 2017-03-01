var React = require('react');
var expect = require('expect');
import * as actions from 'actions';
import { Todo } from 'Todo';
var TestUtils = require('react-addons-test-utils');

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });
    it('should dispatch TOGGLE_TODO action on click', () => {
        var todoData = {
            id: 2,
            text: 'test text',
            completed: true
        }
        var action = actions.startToggleTodo(todoData.id, !todoData.completed);
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />);
        var dom = TestUtils.scryRenderedDOMComponentsWithTag(todo, 'div')[0];
        TestUtils.Simulate.click(dom);
        expect(spy).toHaveBeenCalledWith(action);
    })
})