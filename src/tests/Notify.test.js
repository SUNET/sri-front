import React from "react";
import expect from "expect";

import { setupComponent, fakeStore, getState } from "./App.test";
import NotifyContainer from "../containers/Notify";
import * as actions from "../actions/Notify";

describe("Notifications Component", () => {
  const state = {
    notify: {
      messages: [{ msg: "dummy message", level: 'success', values: null }],
    }
  };

  it("Renders the notifications component", () => {
    const wrapper = setupComponent({
        component: <NotifyContainer />,
        overrides: state
      }),
      alertElem = wrapper.find("Alert");

    expect(alertElem.length).toEqual(1);
    expect(alertElem.text()).toContain("dummy message");
  });

  const errorState = {
    notify: {
      messages: [{ msg: "dummy error", level: 'danger', values: null }]
    }
  };

  it("Renders the notifications component - error", () => {
    const wrapper = setupComponent({
        component: <NotifyContainer />,
        overrides: errorState
      }),
      alertElem = wrapper.find("Alert");

    expect(alertElem.length).toEqual(1);
    expect(alertElem.text()).toContain("dummy error");
  });
});

describe("Notification Actions", () => {
  it("Should add new notification ", () => {
    const expectedAction = {
      type: actions.NEW,
      payload: {
        msg: "dummy message",
        level: "dummy level",
        values: null
      }
    };
    expect(actions.notify("dummy message", "dummy level")).toEqual(
      expectedAction
    );
  });

  it("Should remove a notification ", () => {
    const expectedAction = {
      type: actions.RM,
    };
    expect(actions.rmNotification()).toEqual(expectedAction);
  });

  it("Should remove all notifications", () => {
    const expectedAction = {
      type: actions.RM_ALL
    };
    expect(actions.rmAllNotifications()).toEqual(expectedAction);
  });
});

describe("Test Notifications Container", () => {
  let wrapper, dispatch;

  beforeEach(() => {
    const store = fakeStore(
      getState({
        notify: {
          messages: [{ msg: "dummy", level: 'success', values: null }],
        }
      })
    );
    dispatch = store.dispatch;
    wrapper = setupComponent({
      component: <NotifyContainer />,
      store: store
    });
  });

  it("Clicks a language selector button", () => {
    const numCalls = dispatch.mock.calls.length;
    wrapper
      .find("button")
      .props()
      .onClick();
    expect(dispatch.mock.calls.length).toEqual(numCalls + 1);
  });
});

