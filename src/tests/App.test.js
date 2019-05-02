import React from "react";
import mock from "jest-mock";
import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";
import { Provider } from "react-redux";

import AppContainer from "../containers/App";

configure({ adapter: new Adapter() });

const fakeStore = state => ({
  default: () => {},
  dispatch: mock.fn(),
  subscribe: mock.fn(),
  getState: () => ({ ...state })
});

const fakeState = {
  app: {
    is_app_loaded: false
  }
};

export const getState = (overrides = {}) => {
  const refakeState = { ...fakeState };
  Object.getOwnPropertyNames(fakeState).forEach(propName => {
    const overriddenProps = Object.getOwnPropertyNames(overrides);
    if (overriddenProps.includes(propName)) {
      refakeState[propName] = {
        ...fakeState[propName],
        ...overrides[propName]
      };
    }
  });
  return refakeState;
};

export function setupComponent({ component, overrides, store } = {}) {
  if (store === undefined) {
    if (overrides === undefined) {
      overrides = {};
    }
    store = fakeStore(getState(overrides));
  }
  const wrapper = mount(<Provider store={store}>{component}</Provider>);
  return wrapper;
}

const store = fakeStore(fakeState);

it("renders without crashing", () => {
  const div = document.createElement("div");
  const component = setupComponent({ component: <AppContainer /> });
});
