var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });
    it('should render form', () => {
        var addTodo = TestUtils.renderIntoDocument(<AddTodo />);
        var form = TestUtils.findRenderedDOMComponentWithTag(addTodo, 'form');
        expect(form).toExist();
    })
    it('should call onAdd with given text', () => {
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAdd={spy} />);
        var el = TestUtils.findRenderedDOMComponentWithTag(addTodo, 'form');
        addTodo.refs.todoText.value = 'test text';
        TestUtils.Simulate.submit(el);
        expect(spy).toHaveBeenCalledWith('test text');
    })
    it('should not call onAdd with invalid data', () => {
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAdd={spy} />);
        var el = TestUtils.findRenderedDOMComponentWithTag(addTodo, 'form');
        addTodo.refs.todoText.value = '';
        TestUtils.Simulate.submit(el);
        expect(spy).toNotHaveBeenCalled();
    })
})