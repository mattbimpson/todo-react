import {
    ADD_TODO
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
            todos.push({ text: action.todo.text, completed: false })
            const newState = { ...state, todos };
            return newState;
        default:
            return state;
    }
}

export default reducer;
