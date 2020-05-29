import React from 'react';
import PropTypes from 'prop-types';
import { QueryRenderer } from 'react-relay';
import environment from '../../createRelayEnvironment';

import CableUpdateFormContainer from '../../containers/cable/CableUpdateForm';
import DeleteCableMutation from '../../mutations/cable/DeleteCableMutation';

import CableDetailsQuery from '../../queries/cable/CableDetailsQuery';

class CableDetails extends React.Component {
  ID_ENTITY_KEY = 'cableId';
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
      history.push(`/network/cables`);
    };
    DeleteCableMutation(idEntity, isInsideModal ? callbackAfterDeleteInModal : callbackInRouteForm);
  };

  render() {
    const entityId = this.getId();
    return (
      <QueryRenderer
        environment={environment}
        query={CableDetailsQuery}
        variables={{
          [this.ID_ENTITY_KEY]: entityId,
        }}
        render={({ error, props, retry }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return (
              <section className="model-details cable-details">
                <CableUpdateFormContainer
                  onDelete={this.handleDelete}
                  cable={props.getCableById}
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

export default CableDetails;
