import React from 'react';
import {mount} from 'enzyme';
import chai, {expect} from 'chai';
import configureMockStore from 'redux-mock-store';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());

import Dashboard from '../dashboard';

describe('<Dashboard>', () => {
    const mockStore = configureMockStore();
    let initialState;
    let store;
    let wrapper;

    beforeEach(() => {
        initialState = [];
        store = mockStore(initialState);
    });

    describe('is mounted', () => {

        beforeEach(() => {
            wrapper = mount(<Dashboard store={store}></Dashboard>);
        });

        it('dashboard form exist', () => {
            expect(wrapper).to.have.length(1);
        });

        it('should render `.dashboard`', () => {
            expect(wrapper).to.have.className('dashboard');
        });
    });
});
