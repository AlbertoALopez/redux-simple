import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import todoApp from './todos/reducers/reducers';
import TodoApp from './todos/components/Todo/Todo.jsx';

const store = createStore(todoApp);

const app = () => {
    render(
        <Provider store={store}>
            <TodoApp
                {...store.getState()}
            />
        </Provider>,
        document.getElementById('root')
    );
};

store.subscribe(app);
app();
