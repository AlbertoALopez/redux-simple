/* Redux actions */
import * as types from '../constants/actionTypes';

export const addTodo = text => ({ type: types.ADD_TODO, text });
export const deleteTodo = id => ({ type: types.DELETE_TODO, id });
