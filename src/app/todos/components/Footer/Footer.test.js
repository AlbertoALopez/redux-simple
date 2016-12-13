import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from './Footer.jsx';

function onFooterClick() {
    console.log('click');
}

test('Footer component should render', () => {
    const component = renderer.create(
        <Footer
            visibilityFilter="SHOW_ALL"
            onClick={onFooterClick}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Footer should contain a selected filter and two unselected components', () => {
    const wrapper = mount(
        <Footer
            visibilityFilter="SHOW_ALL"
            onClick={onFooterClick}
        />
    );

    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('a').length).toBe(2);
});
