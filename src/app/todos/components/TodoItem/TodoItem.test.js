import React from 'react';
import renderer from 'react-test-renderer';
import TodoItem from './TodoItem';
import { mount } from 'enzyme';


test('Todo Item renders a list item', () => {
    const component = renderer.create(
        <TodoItem
            text="Test"
            completed={false}
            onClick={() => {
                console.log('test');
            }}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Todo Item renders text properly', () => {
    const wrapper = mount(
        <TodoItem
            text="Test"
            completed={false}
            onClick={() => {
                console.log('test');
            }}
        />
    );
    const p = wrapper.find('.todo-item-text');
    expect(p.text()).toBe('Test');
});
