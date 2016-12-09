import React from 'react';

const AddTodo = ({ handleTodoAdd }) => {
    let input;
    return (
        <div>
            <input
                ref={(node) => {
                    input = node;
                }}
            />
            <button
                onClick={() => {
                    handleTodoAdd(input.value);
                }}
            >
                Add Todo
            </button>
        </div>
    );
};

export default AddTodo;
