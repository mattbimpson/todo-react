import * as actionTypes from './actionTypes';

const actionCreators = {
    addTodo: todo => ({ type: actionTypes.ADD_TODO, todo }),
    updateTodo: todo => ({ type: actionTypes.UPDATE_TODO, todo })
}

export default actionCreators;
