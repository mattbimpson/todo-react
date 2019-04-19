import React, { Component } from 'react';
import { connect } from 'react-redux'
import actionCreators from '../store/actionCreators';
import TodoList from './TodoList';
import './main.css';

class Main extends Component {
    state = {
        description: ''
    };

    descriptionChanged = e => {
        if (!e.target.value) return;

        this.setState({ description: e.target.value });
    };

    stringOrDefault = (text, defaultText) => text !== '' ? text : defaultText;

    render() {
        return (
            <div>
                <div className="header">
                    stuff to do
                </div>
                <div className="add-container">
                    <input type="text" placeholder="what do you need to do?" value={this.state.description} onChange={(e) => { this.descriptionChanged(e) }} />
                    <input type="button" className="btn" onClick={
                        () => {
                            this.props.addTodo({ text: this.stringOrDefault(this.state.description, 'new item') });
                            this.setState({description: ''});
                        }
                        } value="add todo"/>
                </div>
                <TodoList todos={this.props.todos} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch(actionCreators.addTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
