/* Redux actions */
import * as types from '../constants/actionTypes';

// Unique id for react props
let nextTodoId = 0;

export const addTodo = text => ({
    type: types.ADD_TODO,
    id: nextTodoId++,
    text,
});
export const deleteTodo = id => ({ type: types.DELETE_TODO, id });
export const toggleTodo = id => ({ type: types.TOGGLE_TODO, id });
