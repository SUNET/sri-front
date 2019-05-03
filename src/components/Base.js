import React from "react";
// import { Route } from "react-router-dom";

import SearchContainer from "../containers/Search";

class Base extends React.Component {
    render() {
        return (
            <main className="container">
                <SearchContainer />
            </main>
        );
    }
}

export default Base;
