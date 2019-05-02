import React from "react";

import { setupComponent } from "./App.test.js";
import SplashContainer from "../containers/Splash";

describe("Splash Component", () => {
    it("Renders", () => {
        const wrapper = setupComponent({
                component: <SplashContainer />,
                overrides: { app: { is_app_loaded: false } }
            }),
            splash = wrapper.find("div.splash-spinner");

        expect(splash.length).toEqual(1);
    });

    it("Doesn't Render", () => {
        const wrapper = setupComponent({
                component: <SplashContainer />,
                overrides: { app: { is_app_loaded: true } }
            }),
            splash = wrapper.find("div.splash-spinner");

        expect(splash.length).toEqual(0);
    });
});
