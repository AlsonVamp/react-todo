var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
import * as actions from 'actions';
var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });
    it('should render form', () => {
        var addTodo = TestUtils.renderIntoDocument(<AddTodo />);
        var form = TestUtils.findRenderedDOMComponentWithTag(addTodo, 'form');
        expect(form).toExist();
    })
    it('should dispatch ADD_TODO when valid todo text', () => {
        var testText = 'test text';
        var action = actions.startAddTodo(testText);
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
        var el = TestUtils.findRenderedDOMComponentWithTag(addTodo, 'form');
        addTodo.refs.todoText.value = testText;
        TestUtils.Simulate.submit(el);
        expect(spy).toHaveBeenCalledWith(action);
    })
    it('should not dispatch ADD_TODO when invalid todo text', () => {
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
        var el = TestUtils.findRenderedDOMComponentWithTag(addTodo, 'form');
        addTodo.refs.todoText.value = '';
        TestUtils.Simulate.submit(el);
        expect(spy).toNotHaveBeenCalled();
    })
})