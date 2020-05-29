import React from 'react';
import PropTypes from 'prop-types';
import { QueryRenderer } from 'react-relay';
import { withTranslation } from 'react-i18next';

import ContactUpdateFormContainer from '../../containers/contact/ContactUpdateForm';
import DeleteContactMutation from '../../mutations/contact/DeleteContactMutation';
import environment from '../../createRelayEnvironment';
import ContactDetailsQuery from '../../queries/contact/ContactDetailsQuery';

class ContactDetails extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.node,
      }),
    }),
  };

  getId() {
    const { isInsideModal, idFromModal, match } = this.props;
    const entityId = isInsideModal && idFromModal ? idFromModal : match.params.contactId;
    return entityId;
  }

  handleDelete = () => {
    const { history, isInsideModal, deletedEntity } = this.props;
    const contactId = this.getId();
    const callbackAfterDeleteInModal = () => {
      deletedEntity(contactId);
    };
    const callbackInRouteForm = () => {
      history.push(`/community/contacts`);
    };
    DeleteContactMutation(contactId, isInsideModal ? callbackAfterDeleteInModal : callbackInRouteForm);
  };

  render() {
    const contactId = this.getId();
    return (
      <QueryRenderer
        environment={environment}
        query={ContactDetailsQuery}
        variables={{
          contactId,
        }}
        render={({ error, props, retry }) => {
          if (error) {
            return <div>{this.props.t('general.error')}</div>;
          } else if (props) {
            return (
              <section className="model-details contact-details">
                <ContactUpdateFormContainer
                  onDelete={this.handleDelete}
                  contact={props.getContactById}
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

export default withTranslation()(ContactDetails);
