import React from 'react';

const AddTodo = ({ dispatch }) => {
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
                    dispatch(addTodo(inout.value));
                    input.value = '';
                }}
            >
                Add Todo
            </button>
        </div>
    );
};

export default AddTodo;
