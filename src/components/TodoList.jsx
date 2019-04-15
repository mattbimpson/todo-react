import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return <div>
        { 
            props.todos.map((x, i) => <div key={i}>Id: {x.id} <Todo todo={x} /></div>) 
        }
    </div>
}

export default TodoList