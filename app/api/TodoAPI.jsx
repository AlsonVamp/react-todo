module.exports = {
    setTodos: function (todos) {
        if (Array.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function () {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];
        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {

        }
        return Array.isArray(todos) ? todos : [];
    }
}