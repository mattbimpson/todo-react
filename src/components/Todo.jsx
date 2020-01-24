import React from 'react';
import { connect } from 'react-redux'
import actionCreators from '../store/actionCreators';
import './todo.css';

const Todo = (props) => {

    const { todo, updateTodo, deleteTodo } = props;

    function completedChanged() {
        const todoCopy = { ...todo };
        todoCopy.completed = !todo.completed;
        updateTodo(todoCopy);
    }

    function remove() {
        deleteTodo(todo.id);
    }

    return (
        <div className={`todo-container ${todo.completed ? 'completed' : ''}`} onClick={completedChanged}>
            <div className='todo-item'>
                {todo.text}
            </div>
            <div className='todo-controls'>
                <input type="button" className="btn" value="X" onClick={remove}></input>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    updateTodo: todo => dispatch(actionCreators.updateTodo(todo)),
    deleteTodo: id => dispatch(actionCreators.deleteTodo(id))
})

export default connect(null, mapDispatchToProps)(Todo);
