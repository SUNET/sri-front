import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import '../style/NotFound.scss';

const NotFound = (props) => {
  return (
    <section className="not-found">
      <div className="page-404">
        <div className="content">
          <h1>404</h1>
          <div className="text">We couldn't fing the page you are looking for.</div>
          <button className="btn primary lg" type="button" onClick={() => props.history.push('/')}>
            Go Home
          </button>
        </div>
        {window.history.pushState(null, '', props.path)}
      </div>
    </section>
  );
};

export const RouteNotFound = (history) => {
  return <Redirect to={{ state: { notMatch: true, pathname: history.location.pathname } }} />;
};

const CaptureRouteNotFound = withRouter(({ children, location, history }) => {
  return location && location.state && location.state.notMatch ? (
    <NotFound path={location.state.pathname} history={history} />
  ) : (
    children
  );
});

export default CaptureRouteNotFound;
