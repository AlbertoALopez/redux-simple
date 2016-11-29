import expect from 'expect';
import deepFreeze from 'deep-freeze';
import { createStore, combineReducers } from 'redux';

const todo = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false,
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed,
            };
        default:
            return state;
    }
};


const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action),
            ];
        case 'TOGGLE_TODO':
            return state.map((t) => todo(t, action));
        default:
            return state;
    }
};

const testAddTodo = () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux',
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false,
        },
    ];
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

const todoApp = combineReducers({
    todos,
    visibilityFilter,
});


const testToggleTodo = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false,
        },
        {
            id: 1,
            text: 'Go shopping',
            completed: false,
        },
    ];
    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false,
        },
        {
            id: 1,
            text: 'Go shopping',
            completed: true,
        },
    ];

    const action = {
        type: 'TOGGLE_TODO',
        id: 1,
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
};

testAddTodo();
testToggleTodo();
console.log('All tests done');

const store = createStore(todoApp);
console.log('InitialState:');
console.log(store.getState());


console.log('Dispatching ADD_TODO');
store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Go shopping',
});
console.log(store.getState());
