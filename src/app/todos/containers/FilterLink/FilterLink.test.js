import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import FilterLink from './FilterLink.jsx';


function onFilterClick() {
    console.log('click');
}

test('FilterLink should render', () => {
    const component = renderer.create(
        <FilterLink
            filter="SHOW_ALL"
            currentFilter="SHOW_ALL"
            onClick={onFilterClick}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Filterlink should render a span when the current filter is selected', () => {
    const wrapper = mount(
        <FilterLink
            filter="SHOW_ALL"
            currentFilter="SHOW_ALL"
            onClick={onFilterClick}
        />
    );

    expect(wrapper.find('span').length).toBe(1);
});

test('FilterLink should render an anchor tag when current filter is not selected', () => {
    const wrapper = mount(
        <FilterLink
            filter='SHOW_ALL'
            currentFilter="SHOW_COMPLETED"
            onClick={onFilterClick}
        />
    );

    expect(wrapper.find('a').length).toBe(1);
});
