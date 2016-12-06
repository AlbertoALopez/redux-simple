/* React component for a single To Do item */
import React from 'react';

const TodoItem = ({
    onClick,
    completed,
    text,
    id
}) => {
    return (
        <li
            onClick={onClick}
            style={{
                textDecoration:
                    completed ?
                    'line-through' :
                    'none',
            }}
        >
            <div className="todo-item-text">{text}</div>
        </li>
    );
};

export default TodoItem;
