var React = require('react');
var expect = require('expect');
var Todo = require('Todo');
var TestUtils = require('react-addons-test-utils');

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });
    it('should call onToggle prop with id on click', () => {
        var todoData = {
            id: 2,
            text: 'test text',
            completed: true
        }
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);
        var dom = TestUtils.scryRenderedDOMComponentsWithTag(todo, 'div')[0];
        TestUtils.Simulate.click(dom);
        expect(spy).toHaveBeenCalledWith(todoData.id);
    })
})