var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });
    it('should exist', () => {
        expect(TodoAPI).toExist();
    })

    describe('filterTodos', () => {
        var todos = [{
            id: 1,
            text: "Test text one",
            completed: true
        },
        {
            id: 2,
            text: "Test text two",
            completed: false
        },
        {
            id: 3,
            text: "Test text three",
            completed: true
        }];
        it('should return all items if showCompleted is true', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        })
        it('should return only uncompleted items if showCompleted is false', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        })
        it('should sort by completed status', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos[0].completed).toBe(false);
        })
        it('should todos by searchText', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, 'two');
            expect(filteredTodos.length).toBe(1);
            expect(filteredTodos[0].text).toBe(todos[1].text);
        })
        it('should return all todos if searchText is empty', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        })
    });
});