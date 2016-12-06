import React, { propTypes } from 'react';
import TodoItem from '../TodoItem/TodoItem.jsx';

const TodoList = ({ todos, handleTodoClick }) => {
    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        onClick={() => handleTodoClick(todo.id)}
                    />
                );
            })}
        </ul>
    );
};

TodoList.propTypes = {
    todos: React.PropTypes.array.isRequired,
    handleTodoClick: React.PropTypes.func.isRequired,
};

export default TodoList;
