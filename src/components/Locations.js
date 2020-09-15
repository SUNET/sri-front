import React from 'react';
import { withTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';

import '../style/Footer.scss';

class Locations extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={`${this.props.match.url}/locations`} component={() => <p>Locations</p>} />
        <Route path={`${this.props.match.url}/locations/racks`} component={() => <p>Racks</p>} />
        <Route path={`${this.props.match.url}/locations/sites`} component={() => <p>Sites</p>} />
      </Switch>
    );
  }
}

export default withTranslation()(Locations);
