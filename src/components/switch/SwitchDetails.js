import React from 'react';
import PropTypes from 'prop-types';
import { QueryRenderer } from 'react-relay';
import environment from '../../createRelayEnvironment';

import SwitchUpdateFormContainer from '../../containers/switch/SwitchUpdateForm';
import DeleteSwitchMutation from '../../mutations/switch/DeleteSwitchMutation';

import SwitchDetailsQuery from '../../queries/switch/SwitchDetailsQuery';

class SwitchDetails extends React.Component {
  ID_ENTITY_KEY = 'switchId';
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.node,
      }).isRequired,
    }).isRequired,
  };

  handleDelete = () => {
    const idEntity = this.props.match.params[this.ID_ENTITY_KEY];
    DeleteSwitchMutation(idEntity, () =>
      this.props.history.push(`/network/switches`),
    );
  };

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={SwitchDetailsQuery}
        variables={{
          [this.ID_ENTITY_KEY]: this.props.match.params[this.ID_ENTITY_KEY],
        }}
        render={({ error, props, retry }) => {
          if (error) {
            return <div>{this.props.t('general.error')}</div>;
          } else if (props) {
          console.log('props: ', props);
            return (
              <section className="model-details switch-details">
                <SwitchUpdateFormContainer
                  onDelete={this.handleDelete}
                  switch={props.getSwitchById}
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

export default SwitchDetails;
