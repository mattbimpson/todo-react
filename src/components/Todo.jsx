import React, { Component } from 'react';
import { connect } from 'react-redux'
import actionCreators from '../store/actionCreators';
import './todo.css';

class Todo extends Component {
    completedChanged = () => {
        const todo = { ...this.props.todo };
        todo.completed = !todo.completed;
        this.props.updateTodo(todo);
    }

    remove = () => {
        this.props.deleteTodo(this.props.todo.id);
    }

    render = () => {
        const todo = this.props.todo;
        return (
            <div className='todo-container'>
                <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                    id: {`${todo.id} ${todo.text}`}
                </div>
                <div className='todo-controls'>
                    mark as done <input type="checkbox" checked={todo.completed} onChange={this.completedChanged}></input>
                    <input type="button" value="remove" onClick={this.remove}></input>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateTodo: todo => dispatch(actionCreators.updateTodo(todo)),
    deleteTodo: id => dispatch(actionCreators.deleteTodo(id))
})

export default connect(null, mapDispatchToProps)(Todo);
