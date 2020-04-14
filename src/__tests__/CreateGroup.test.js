import React, { Router } from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { shape } from 'prop-types';
import { CreateGroupForm } from '../components/group/CreateGroupForm';

function setup() {
  const props = {
    addTodo: jest.fn(),
  };

  const enzymeWrapper = mount(<CreateGroupForm {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('Create Group Form Component', () => {
  beforeEach(() => {
    // wrapper = mountContainerWithStore();
  });
  afterEach(() => {
    // wrapper.unmount();
  });
  it('Render Form Component', () => {
    // const wrapper = mount(<CreateGroupForm />);
    const { enzymeWrapper } = setup();
    expect(true).toBe(true);
  });
});
