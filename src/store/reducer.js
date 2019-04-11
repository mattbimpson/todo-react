import {
    ADD_TODO
} from './actionTypes';
import initialState from './initialState';

//import initialState from './initialState';

/* eslint-disable */
const updateObject = (oldObj, newObj) => ({
    ...oldObj,
    ...newObj
});
const updateArray = (oldArr, newArr) => ([
    ...oldArr,
    ...newArr
]);
/* eslint-enable */

const reducer = (state, action) => {
    switch(action.type) {
        case ADD_TODO:
            //const todos = [...state.todos];
            //todos.push({ text: action.todo.text, completed: false })
            const updated = updateArray(state.todos, [{ text: action.todo.text, completed: false}]);
            state.todos = updated;
            return state;
        default:
            return state;
    }
}

export default reducer;
