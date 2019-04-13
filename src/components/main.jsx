import React, { Component } from 'react';
import { connect } from 'react-redux'
import actionCreators from '../store/actionCreators';
import TodoList from './TodoList';

class Main extends Component {

    render() {
        return (
            <div>
                <input type="button" onClick={() => this.props.addTodo({text: 'a new item'})} value="click me"/>
                <div>todo</div>
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
