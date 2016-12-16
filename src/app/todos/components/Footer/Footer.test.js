import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import Footer from './Footer.jsx';

function setup(...args) {
    const props = {
        ...args,
    };

    const enzymeWrapper = shallow(
        <Footer
            {...props}
        />
    );

    return {
        props,
        enzymeWrapper,
    };
}

test('Footer should contain a selected filter and two unselected components', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('p').length).toBe(1);
});
