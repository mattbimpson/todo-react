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
            <div className={`todo-container ${todo.completed ? 'completed' : ''}`} onClick={this.completedChanged}>
                <div className='todo-item'>
                    {todo.text}
                </div>
                <div className='todo-controls'>
                    <input type="button" className="btn" value="X" onClick={this.remove}></input>
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
