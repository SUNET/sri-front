import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import SplashContainer from '../containers/Splash';

// Create the mock store
const mockStore = configureMockStore();

let wrapper;

const mountContainerWithStore = (appProps) => {
  const store = mockStore({
    app: appProps,
  });
  return mount(<SplashContainer store={store} />);
};

describe('Splash Component', () => {
  // beforeEach(() => {});
  afterEach(() => {
    wrapper.unmount();
  });
  it('Loading: Render the spinner', () => {
    wrapper = mountContainerWithStore({
      is_app_loaded: false,
    });
    expect(wrapper.find('#splash-spinner').length).toBe(1);
  });
  it('Loaded: Not render spinner', () => {
    wrapper = mountContainerWithStore({
      is_app_loaded: true,
    });
    expect(wrapper.find('#splash-spinner').length).toBe(0);
  });
});
