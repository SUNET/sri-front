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

  getContactId() {
    const { is_contact_form_visible, contact_details_id, match } = this.props;
    const contactId = is_contact_form_visible && contact_details_id ? contact_details_id : match.params.contactId;
    return contactId;
  }

  handleDelete = () => {
    const { hideNewContactForm, history, is_contact_form_visible, deleteContact } = this.props;
    const contactId = this.getContactId();
    const callbackAfterDeleteInModal = () => {
      deleteContact(contactId);
    };
    const callbackInRouteForm = () => {
      history.push(`/community/contacts`);
    };
    callbackAfterDeleteInModal();
    DeleteContactMutation(contactId, is_contact_form_visible ? callbackAfterDeleteInModal : callbackInRouteForm);
  };

  render() {
    const contactId = this.getContactId();
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
