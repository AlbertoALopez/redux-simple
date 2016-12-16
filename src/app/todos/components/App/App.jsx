/* Todo component */
import React from 'react';
import Footer from '../Footer/Footer.jsx';
import AddTodo from '../../containers/AddTodo/AddTodo.jsx';
import VisibleTodoList from '../../containers/VisibleTodoList/VisibleTodoList.jsx';


const App = () => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    );
};

export default App;
