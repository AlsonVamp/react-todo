import firebase, { firebaseRef, githubProvider } from 'app/firebase/';
import moment from 'moment';

export var setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    }
};

export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED',
    }
};

export var addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    }
};

export var startAddTodo = (text) => {
    return (dispatch, getState) => {
        var todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        }
        var todoRef = firebaseRef.child('todos').push(todo);
        return todoRef.then(() => {
            dispatch(addTodo(Object.assign({}, todo, { id: todoRef.key })));
        });
    }
};

export var addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    }
};

export var updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
    }
};

export var startAddTodos = () => {
    return (dispatch, getState) => {
        return firebaseRef.child('todos')
            .once('value')
            .then((snapshot) => {
                var parsedTodos = [];
                var todos = snapshot.val() || {};
                Object.keys(todos).forEach((todoId) => {
                    parsedTodos.push(Object.assign({ id: todoId }, todos[todoId]));
                });
                dispatch(addTodos(parsedTodos));
            });
    }
};

export var startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {
        var todoRef = firebaseRef.child('todos/' + id);
        var updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        }
        return todoRef.update(updates).then(() => {
            dispatch(updateTodo(id, updates));
        })
    }
};

export var startLogin = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(githubProvider).then((result) => {
            console.log('auth worked', result)
        }, (error) => {
            console.log('Unable to auth', error)
        });
    }
};

export var startLogout = () => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then(() => {
            console.log('Logged out!');
        })
    }
};