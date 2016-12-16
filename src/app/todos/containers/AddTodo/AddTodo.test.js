import React from 'react';
import { AddTodo } from './AddTodo.jsx';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

const mockStore = configureMockStore();
const initialState = {};
const store = mockStore(initialState);

test('AddTodo should render', () => {
    const component = renderer.create(
        <AddTodo
            onClick={jest.fn()}
            store={store}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('component', () => {
    const enzymeWrapper = shallow(
        <AddTodo />
    );

    expect(enzymeWrapper.find('button').length).toBe(1);
    expect(enzymeWrapper.find('input').length).toBe(1);
});
