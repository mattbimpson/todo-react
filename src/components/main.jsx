import React, { Component } from 'react';
import { connect } from 'react-redux'
import actionCreators from '../store/actionCreators';
import TodoList from './TodoList';
import ConfirmBtn from './ConfirmBtn';
import './main.css';

class Main extends Component {
    state = {
        description: ''
    };

    addTodo = () => {
        this.props.addTodo({ text: this.stringOrDefault(this.state.description, 'new item') });
        this.setState({description: ''});
    }

    clearAll = () => {
        this.props.clearAll();
    }

    descriptionChanged = e => {
        if (!e.target.value) return;

        this.setState({ description: e.target.value });
    };

    keyDown = (e) => {
        if (e.key === 'Enter') {
            this.addTodo();
        }
    }

    stringOrDefault = (text, defaultText) => text !== '' ? text : defaultText;

    render() {
        return (
            <div>
                <div className="header">
                    stuff to do
                </div>
                <div className="add-container">
                    <input type="text" id="txtTodo" onKeyDown={this.keyDown} placeholder="what do you need to do?" value={this.state.description} onChange={(e) => { this.descriptionChanged(e) }} />
                    <input type="button" id="btnAdd" className="btn" onClick={this.addTodo} value="add todo" disabled={!this.state.description} />
                </div>
                <TodoList todos={this.props.todos} />
                {
                    this.props.todos.length ?
                    <ConfirmBtn buttonText="Clear all your todos?" action={this.clearAll} />
                    : null
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch(actionCreators.addTodo(todo)),
    clearAll: () => dispatch(actionCreators.clearAll())
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
