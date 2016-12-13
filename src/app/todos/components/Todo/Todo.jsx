/* Todo component */
import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../TodoList/TodoList.jsx';
import AddTodo from '../AddTodo/AddTodo.jsx';
import Footer from '../Footer/Footer.jsx';


let nextTodoId = 0;

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
    onFilterClick(filter) {
        this.props.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter,
        });
    }
    handleTodoAdd(value) {
        this.props.dispatch({
            type: 'ADD_TODO',
            text: value,
            id: nextTodoId,
        });
        nextTodoId++;
    }

    handleToggleTodo(id) {
        this.props.dispatch({
            type: 'TOGGLE_TODO',
            id,
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
                <AddTodo
                    handleTodoAdd={this.handleTodoAdd.bind(this)}
                />
                <TodoList
                    todos={visibleTodos}
                    handleTodoClick={(id) => {
                        this.props.dispatch({
                            type: 'TOGGLE_TODO',
                            id,
                        });
                    }}
                />
                <Footer
                    visibilityFilter={visibilityFilter}
                    onFilterClick={this.onFilterClick.bind(this)}
                />
            </div>
        );
    }
}

export default connect()(TodoApp);
