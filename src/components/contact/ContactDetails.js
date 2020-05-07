import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import { withTranslation } from "react-i18next";

import ContactUpdateFormContainer from "../../containers/contact/ContactUpdateForm";
import DeleteContactMutation from "../../mutations/contact/DeleteContactMutation";
import environment from "../../createRelayEnvironment";
import ContactDetailsQuery from "../../queries/contact/ContactDetailsQuery";

class ContactDetails extends React.Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.node
            }).isRequired
        }).isRequired
    };

    handleDelete = () => {
        const contactId = this.props.match.params.contactId;
        DeleteContactMutation(contactId, () => this.props.history.push(`/community/contacts`));
    };

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={ContactDetailsQuery}
                variables={{
                    contactId: this.props.match.params.contactId
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
