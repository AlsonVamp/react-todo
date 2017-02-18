var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    })
    it('should call onSearch with given data', () => {
        var searchText = 'Test'
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);
        expect(spy).toHaveBeenCalledWith(false, searchText);
    })
    it('should call onSearch with checked value', () => {
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
        expect(spy).toHaveBeenCalledWith(true, '');
    })
})