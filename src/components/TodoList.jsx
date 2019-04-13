import React from 'react';

const TodoList = (props) => {
    return <div>
        { 
            props.todos.map((x, i) => <div key={i}>Id: {x.id} {x.text}</div>) 
        }
    </div>
}

export default TodoList