import {
    ADD_TODO
} from './actionTypes';

import initialState from './initialState';

/* eslint-disable */
const updateObject = (oldObj, newObj) => {
    oldObj, {
        ...newObj
    }
};
/* eslint-enable */

const reducer = (state = initialState, action) => {
    switch(action.type) {
        // case ADD_TODO:
        //     return updateObject(
        //         ...state.todos,
        //         {
        //             text: action.text,
        //             completed: false
        //         }
        //     )
        default:
            return state;
    }
}

export default reducer;
