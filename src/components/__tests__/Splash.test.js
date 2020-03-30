import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { shallow } from "enzyme";

import Splash from "../Splash";

let container = null;
beforeEach(() => {
    container = shallow(<Splash />, { disableLifecycleMethods: true });
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("Render the spinner element", () => {
    act(() => {
        render(<Splash />, container);
    });
    console.log(container);

    expect(container.find("#splash-spinner"))
        .exists()
        .toBeTruthy();
});
