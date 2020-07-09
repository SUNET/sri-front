import React from 'react';
import { QueryRenderer } from 'react-relay';
import environment from '../../createRelayEnvironment';

class _BasicDetailsParentClass extends React.Component {
  ID_ENTITY_KEY = '';
  UpdateFormContainer = undefined;
  DetailsQuery = undefined;
  entityNameProp = '';
  entityGetDetailsMethodName = '';
  classDetails = '';

  // lifecycle
  shouldComponentUpdate(nextProps, nextState) {
    const confirmedDelete = !this.props.isDeleteConfirmed && nextProps.isDeleteConfirmed;
    if (confirmedDelete) {
      this.props.hideModalConfirm();
      this.handleDelete();
    }
    return confirmedDelete;
  }

  getId() {
    const { isFromModal, idFromModal, match } = this.props;
    const entityId = isFromModal && idFromModal ? idFromModal : match.params[this.ID_ENTITY_KEY];
    return entityId;
  }

  handleDelete = () => {
    throw new Error('This method should be overwritten in the child class');
  };

  render() {
    const entityId = this.getId();
    return (
      <QueryRenderer
        environment={environment}
        query={this.DetailsQuery}
        variables={{
          [this.ID_ENTITY_KEY]: entityId,
        }}
        render={({ error, props, retry }) => {
          if (error) {
            return <div>{this.props.t('general.error')}</div>;
          } else if (props) {
            const customProps = {
              [this.entityNameProp]: props[this.entityGetDetailsMethodName],
            };
            return (
              <section className={`model-details ${this.classDetails}`}>
                <this.UpdateFormContainer
                  isFromModal={this.props.isFromModal}
                  onDelete={() => {
                    this.props.showModalConfirm('delete');
                  }}
                  history={this.props.history}
                  refetch={retry}
                  {...customProps}
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

export default _BasicDetailsParentClass;
