import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import FilterLink from './FilterLink.jsx';

const mockStore = configureMockStore();

function setup(...args) {
    const props = {
        onClick: jest.fn(),
        ...args,
    };

    const enzymeWrapper = shallow(
        <FilterLink
            {...props}
            store={mockStore}
        />);

    return {
        props,
        enzymeWrapper,
    };
}

test('FilterLink should render', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const component = renderer.create(
        <FilterLink
            filter="SHOW_ALL"
            currentFilter="SHOW_ALL"
            onClick={() => jest.fn()}
            store={store}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('components', () => {
    test('FilterLink should render a span when the current filter is selected', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('span').length).toBe(1);
    });
    test('FilterLink should render an anchor tag when current filter is not selected', () => {
        const { enzymeWrapper } = setup({
            filter: 'SHOW_ALL',
            currentFilter: 'SHOW_COMPLETED',
        });
        expect(enzymeWrapper.find('a').length).toBe(1);
    });
});
