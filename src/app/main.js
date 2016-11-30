import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import todoApp from './todos/reducers/reducers';
import TodoApp from './todos/components/Todo/Todo.jsx';

const store = createStore(todoApp);

const render = () => {
    ReactDOM.render(
        <TodoApp
            {...store.getState()}
        />,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();
