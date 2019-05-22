import React from "react";
import { Route, Switch } from "react-router-dom";

import SearchContainer from "../containers/Search";
import { ContactDetails } from "./Contact";

class Base extends React.Component {
    render() {
        return (
            <main className="container">
                <Switch>
                    <Route path="/contacts" component={SearchContainer} />
                    <Route
                        path="/contact/:contactId"
                        component={ContactDetails}
                    />
                    <Route path="/roles" component={SearchContainer} />
                </Switch>
            </main>
        );
    }
}

export default Base;
