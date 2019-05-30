import React from "react";
import { Link } from "react-router-dom";
import { Redirect, withRouter } from "react-router-dom";

const NotFound = (props) => (
    <section>
        <center>
            <h1>Not Found 404</h1>
            {window.history.pushState(null, "", props.path)}
        </center>
    </section>
);

export const RouteNotFound = (history) => (
    <Redirect to={{ state: { notMatch: true, pathname: history.location.pathname } }} />
);

const CaptureRouteNotFound = withRouter(({ children, location }) => {
    return location && location.state && location.state.notMatch ? (
        <NotFound path={location.state.pathname } />
    ) : (
        children
    );
});

export default CaptureRouteNotFound;
