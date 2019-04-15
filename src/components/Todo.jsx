import React, { Component } from 'react';
import { connect } from 'react-redux'
import actionCreators from '../store/actionCreators';

class Todo extends Component {
    completedChanged = () => {
        const todo = { ...this.props.todo };
        todo.completed = !todo.completed;
        this.props.updateTodo(todo);
    }

    render = () => {
        const todo = this.props.todo;
        return (
            <div>
                {todo.text} <input type="checkbox" checked={todo.completed} onChange={this.completedChanged}></input>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateTodo: todo => dispatch(actionCreators.updateTodo(todo))
})

export default connect(null, mapDispatchToProps)(Todo);
