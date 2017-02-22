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
            <div className="container__footer">
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="todoText" placeholder="Enter your task"/>
                    <button className='button expanded' type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;