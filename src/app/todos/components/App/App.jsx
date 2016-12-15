/* Todo component */
import React from 'react';
import TodoList from '../TodoList/TodoList.jsx';
import AddTodo from '../AddTodo/AddTodo.jsx';
import VisibleTodoList from '../containers/VisibleTodoList';


let nextTodoId = 0;

const App = () => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    );
};
