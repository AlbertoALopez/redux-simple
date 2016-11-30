/* Todo component */
import React from 'react';

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
        // todos: React.PropTypes.array.isRequired,
        // visibilityFilter: React.PropTypes.bool.isRequired,
    };

    render() {
        const {
            todos,
            visibilityFilter
        } = this.props;
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
                    onClick={() => {
                        store.dispatch({
                            type: 'ADD_TODO',
                            text: this.input.value,
                            id: nextTodoId++,
                        });
                    }}
                >
                    Add Todo
                </button>
                <ul>
                    {visibleTodos.map(t =>
                        <li
                            key={t.id}
                            onClick={() => {
                                store.dispatch({
                                    type: 'TOGGLE_TODO',
                                    id: t.id,
                                });
                            }}
                            style={{
                                textDecoration:
                                    t.completed ?
                                        'line-through' :
                                        'none',
                            }}
                        >
                            {t.text}
                        </li>
                    )}
                </ul>
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

export default TodoApp;
