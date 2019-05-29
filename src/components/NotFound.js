import React from "react";
import { Link } from "react-router-dom";
import { Redirect, withRouter } from "react-router-dom";

const NotFound = () => (
    <section>
        <center>
            <h1>Not Found 404</h1>
            <Link to="/">Return to Home Page</Link>
        </center>
    </section>
);

export const RouteNotFound = () => (
    <Redirect to={{ state: { notFoundError: true } }} />
);

const CaptureRouteNotFound = withRouter(({ children, location }) => {
    return location && location.state && location.state.notFoundError ? (
        <NotFound />
    ) : (
        children
    );
});

export default CaptureRouteNotFound;
