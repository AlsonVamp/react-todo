var React = require('react');

var AddTodo = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var text = this.refs.todoText.value;
        if (text.length > 0) {
            this.refs.todoText.value = '';
            this.props.onAdd(text);
        } else {
            this.refs.todoText.focus();
        }
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="todoText" />
                <button className='button expanded' type="submit" placeholder="Write you want to do">Add Todo</button>
            </form>
        )
    }
});

module.exports = AddTodo;