import React from 'react';
import AddTodo from './AddTodo.jsx';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

function handleAddToDo(value) {
    console.log(value);
}

test('AddTodo should render', () => {
    const component = renderer.create(
        <AddTodo
            onClick={handleAddToDo.bind(this)}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('AddTodo should contain a button and input field', () => {
    const wrapper = mount(
        <AddTodo
            onClick={handleAddToDo.bind(this)}
        />
    );

    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('input').length).toBe(1);
});
