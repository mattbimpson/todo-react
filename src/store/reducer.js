import {
    ADD_TODO,
    UPDATE_TODO
} from './actionTypes';

/* eslint-disable */
const updateObject = (oldObj, newObj) => ({
    ...oldObj,
    newObj
});
const updateArray = (oldArr, newArr) => ([
    ...oldArr,
    newArr
]);
/* eslint-enable */

const reducer = (state, action) => {
    switch(action.type) {
        case ADD_TODO:
            const todos = [...state.todos];
            const id = todos.length;
            todos.push({ id, text: action.todo.text, completed: false })
            const newState = { ...state, todos };
            return newState;
        case UPDATE_TODO:
            return { 
                ...state, 
                todos: state.todos.map(x => {
                    if (x.id === action.todo.id) {
                        return action.todo;
                    }
                    return x;
                })
            };
        default:
            return state;
    }
}

export default reducer;
