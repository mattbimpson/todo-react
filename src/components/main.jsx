import React, { useState } from 'react';
import { connect } from 'react-redux'
import actionCreators from '../store/actionCreators';
import TodoList from './TodoList';
import ConfirmBtn from './ConfirmBtn';
import './main.css';

const Main = (props) => {

    const { addTodo, clearAll, todos } = props;

    const [description, setDescription] = useState('');

    function addTodoClicked() {
        addTodo({ text: stringOrDefault(description, 'new item') });
        setDescription('');
    }

    function clearAllClicked() {
        clearAll();
    }

    function descriptionChanged(e) {
        if (!e.target.value) return;

        setDescription(e.target.value);
    };

    function keyDown(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    }

    function stringOrDefault (text, defaultText) {
        return text !== '' ? text : defaultText;
    };

    return (
        <div>
            <div className="header">
                stuff to do
            </div>
            <div className="add-container">
                <input type="text" id="txtTodo" onKeyDown={keyDown} placeholder="what do you need to do?" value={description} onChange={(e) => { descriptionChanged(e) }} />
                <input type="button" id="btnAdd" className="btn" onClick={addTodoClicked} value="add todo" disabled={!description} />
            </div>
            <TodoList todos={todos} />
            {
                todos.length ?
                <ConfirmBtn buttonText="Clear all your todos?" action={clearAllClicked} />
                : null
            }
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch(actionCreators.addTodo(todo)),
    clearAll: () => dispatch(actionCreators.clearAll())
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
