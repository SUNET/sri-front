import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow, mount, render } from "enzyme";

// import Splash from "../Splash";

import SplashContainer from "../containers/Splash";
import Splash from "../components/Splash";

configure({ adapter: new Adapter() });

// Create the mock store
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();

let wrapper;

const mountContainerWithStore = (appProps) => {
    const store = mockStore({
        app: appProps
    });
    return mount(<SplashContainer store={store} />);
};

describe("Splash Component", () => {
    // beforeEach(() => {});
    afterEach(() => {
        wrapper.unmount();
    });
    it("Loading: Render the spinner", () => {
        wrapper = mountContainerWithStore({
            is_app_loaded: false
        });
        expect(wrapper.find("#splash-spinner").length).toBe(1);
    });
    it("Loaded: Not render spinner", () => {
        wrapper = mountContainerWithStore({
            is_app_loaded: true
        });
        expect(wrapper.find("#splash-spinner").length).toBe(0);
    });
});
