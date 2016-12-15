import { connect } from 'react-redux';
import { toggleTodo } from '../../action/actions';
import TodoList from '../../components/TodoList/TodoList.jsx';


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

const mapStatetoProps = (state, ownProps) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (id) => {
            dispatch(toggleTodo(id));
        },
    };
};

const VisibleTodoList = connect(
    mapStatetoProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
