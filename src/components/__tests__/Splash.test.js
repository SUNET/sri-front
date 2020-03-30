import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow, mount, render } from "enzyme";

import Splash from "../Splash";
configure({ adapter: new Adapter() });

let wrapper = null;
beforeEach(() => {
    wrapper = shallow(
        <div>
            <Splash />
        </div>
    );
});

afterEach(() => {
    wrapper.unmount();
});

it("Render the spinner element", () => {
    expect(wrapper.contains(<Splash />)).toBe(true);
});
