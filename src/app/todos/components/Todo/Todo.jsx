/* Todo component */
import React from 'react';
import TodoItem from '../TodoItem/TodoItem.jsx';
import TodoList from '../TodoList/TodoList.jsx';
import { connect } from 'react-redux';

let nextTodoId = 0;

const FilterLink = ({filter, children}) => {
    return (
        <a 
            href="#"
            onClick={(e) => {
                e.preventDefault();
                store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter,
                });
            }}
        >
            {children}
        </a>
    );
};

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
    case 'SHOW_ALL':
        return todos;
    case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
    default:
        return todos;
    }
};

class TodoApp extends React.Component {
    static propTypes = {
        todos: React.PropTypes.array.isRequired,
        visibilityFilter: React.PropTypes.string.isRequired,
        dispatch: React.PropTypes.func.isRequired,
    };

    handleTodoAdd() {
        this.props.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodoId,
        });
        nextTodoId++;
    }

    handleToggleTodo(id) {
        this.props.dispatch({
            type: 'TOGGLE_TODO',
            id: id,
        });
    }

    render() {
        const { todos, visibilityFilter } = this.props;
        const visibleTodos = getVisibleTodos(
            todos,
            visibilityFilter,
        );
        return (
            <div>
                <input
                    ref={(node) => {
                        this.input = node;
                    }}
                />
                <button
                    onClick={this.handleTodoAdd.bind(this)}
                >
                    Add Todo
                </button>
                <TodoList
                    todos={visibleTodos}
                    handleTodoClick={(id) => {
                        this.props.dispatch({
                            type: 'TOGGLE_TODO',
                            id,
                        });
                    }}
                />
                <p>
                    Show:
                    {' '}
                    <FilterLink
                        filter='SHOW_ALL'
                    >
                        All
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter='SHOW_ACTIVE'
                    >
                        Active
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter='SHOW_COMPLETED'
                    >
                        Completed
                    </FilterLink>
                </p>
            </div>
        );
    }
}

export default connect()(TodoApp);
