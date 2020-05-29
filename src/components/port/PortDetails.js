import React from 'react';
import PropTypes from 'prop-types';
import { QueryRenderer } from 'react-relay';
import environment from '../../createRelayEnvironment';

import PortUpdateFormContainer from '../../containers/port/PortUpdateForm';
import DeletePortMutation from '../../mutations/port/DeletePortMutation';

import PortDetailsQuery from '../../queries/port/PortDetailsQuery';

class PortDetails extends React.Component {
  // componentDidMount() {
  //   console.log('MOUNT port details');
  // }
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log('UPDATE port detals');
  // }
  // componentWillUnmount() {
  //   console.log('UNMOUT port details');
  // }

  ID_ENTITY_KEY = 'portId';
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.node,
      }),
    }),
  };

  getId() {
    const { isInsideModal, idFromModal, match } = this.props;
    const entityId = isInsideModal && idFromModal ? idFromModal : match.params[this.ID_ENTITY_KEY];
    return entityId;
  }

  handleDelete = () => {
    const { history, isInsideModal, deletedEntity } = this.props;
    const idEntity = this.getId();
    const callbackAfterDeleteInModal = () => {
      deletedEntity(idEntity);
    };
    const callbackInRouteForm = () => {
      history.push(`/network/ports`);
    };
    DeletePortMutation(idEntity, isInsideModal ? callbackAfterDeleteInModal : callbackInRouteForm);
  };

  render() {
    const entityId = this.getId();
    return (
      <QueryRenderer
        environment={environment}
        query={PortDetailsQuery}
        variables={{
          [this.ID_ENTITY_KEY]: entityId,
        }}
        render={({ error, props, retry }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return (
              <section className="model-details port-details">
                <PortUpdateFormContainer
                  onDelete={this.handleDelete}
                  port={props.getPortById}
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

export default PortDetails;
