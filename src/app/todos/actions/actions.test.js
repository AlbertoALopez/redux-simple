import * as types from '../constants/actionTypes';
import * as actions from './actions';

describe('todo actions', () => {
    it('addTodo should create ADD_TODO action', () => {
        expect(actions.addTodo('Meow')).toEqual({
            type: types.ADD_TODO,
            text: 'Meow'
        });
    });

    it('deleteTodo should create DELETE_TODO action', () => {
        expect(actions.deleteTodo(1)).toEqual({
            type: types.DELETE_TODO,
            id: 1,
        });
    });
});
