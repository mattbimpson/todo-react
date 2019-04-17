import expect from 'expect';
import reducer from '../store/reducer';
import initialState from '../store/initialState';
import * as actionTypes from '../store/actionTypes';

describe('test reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should add an item', () => {
        const newData = {
            action: actionTypes.ADD_TODO,
            todo: { id: 1, text: 'test todo', completed: false }
        };

        let expected = { ...initialState };
        expected.todos.push(newData.todo);

        expect(reducer(initialState, newData)).toEqual(expected);
    });

    it('should update an item', () => {
        const payload = {
            action: actionTypes.UPDATE_TODO,
            todo: { id: 0, text: 'text changed', completed: true }
        };

        const expected = { ...initialState };
        expected.todos[0] = { ...payload.todo };

        expect(reducer(initialState, payload)).toEqual(expected);
    });
});
