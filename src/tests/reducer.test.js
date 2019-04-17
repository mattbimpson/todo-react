import expect from 'expect';
import reducer from '../store/reducer';
import initialState from '../store/initialState';
//import actionCreators from '../store/actionCreators';
import * as actionTypes from '../store/actionTypes';

describe('test reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should add an item', () => {
        const addData = {
            action: actionTypes.ADD_TODO,
            payload: { text: 'text', completed: false }
        };
        expect(reducer({}, addData)).toEqual(null);
    });
});
