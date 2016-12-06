import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from './TodoList';
import { mount } from 'enzyme';


function onClick() {
    console.log('test');
}

const toDoItems = [
    {
        text: 'Test1',
        completed: false,
        id: 0,
    },
    {
        text: 'Test2',
        completed: false,
        id: 1,
    },
];

test('TodoList should render', () => {
    const component = renderer.create(
        <TodoList
            todos={toDoItems}
            handleTodoClick={onClick}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('TodoList should render an unordered list with 2 list items', () => {
    const wrapper = mount(
        <TodoList
            todos={toDoItems}
            handleTodoClick={onClick}
        />
    );

    expect(wrapper.find('ul').length).toBe(1);
    expect(wrapper.find('li').length).toBe(2);
});
