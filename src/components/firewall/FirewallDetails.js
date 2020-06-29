import React from 'react';
import PropTypes from 'prop-types';
import { QueryRenderer } from 'react-relay';
import environment from '../../createRelayEnvironment';

import FirewallUpdateFormContainer from '../../containers/firewall/FirewallUpdateForm';
import DeleteFirewallMutation from '../../mutations/firewall/DeleteFirewallMutation';

import FirewallDetailsQuery from '../../queries/firewall/FirewallDetailsQuery';

class FirewallDetails extends React.Component {
  ID_ENTITY_KEY = 'firewallId';
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.node,
      }).isRequired,
    }).isRequired,
  };

  handleDelete = () => {
    const idEntity = this.props.match.params[this.ID_ENTITY_KEY];
    DeleteFirewallMutation(idEntity, () =>
      this.props.history.push(`/network/firewalls`),
    );
  };

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={FirewallDetailsQuery}
        variables={{
          [this.ID_ENTITY_KEY]: this.props.match.params[this.ID_ENTITY_KEY],
        }}
        render={({ error, props, retry }) => {
          if (error) {
            return <div>{this.props.t('general.error')}</div>;
          } else if (props) {
            return (
              <section className="model-details firewall-details">
                <FirewallUpdateFormContainer
                  onDelete={this.handleDelete}
                  firewall={props.getFirewallById}
                  history={this.props.history}
                  refetch={retry}
                />
              </section>
            );
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}

export default FirewallDetails;
