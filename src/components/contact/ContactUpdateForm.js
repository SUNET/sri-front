import _ContactFormParentClass from "./_ContactFormParentClass";
//Common imports
import PropTypes from "prop-types";
import React from "react";
import { withTranslation } from "react-i18next";
import { reduxForm } from "redux-form";
import { createRefetchContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import UpdateContactMutation from "../../mutations/contact/UpdateContactMutation";
import ValidationsContactForm from "./ValidationContactForm";
// const
import { UPDATE_CONTACT_FORM } from "../../utils/constants";
import { isBrowser } from "react-device-detect";

class ContactUpdateForm extends _ContactFormParentClass {
    IS_UPDATED_FORM = true;
    FORM_ID = UPDATE_CONTACT_FORM;
    state = {
        editMode: false
    };
    static propTypes = {
        onChange: PropTypes.func
    };
    refetch = () => {
        this.props.relay.refetch(
            { contactId: this.props.contact.id }, // Our refetchQuery needs to know the `contactID`
            null, // We can use the refetchVariables as renderVariables
            () => {},
            { force: true }
        );
    };
    handleSubmit = (contact) => {
        this.setState({ editMode: !this.state.editMode });
        UpdateContactMutation(contact, this);
    };
    render() {
        let { handleSubmit } = this.props;
        return (
            <form id={this.FORM_ID} onSubmit={handleSubmit(this.handleSubmit)}>
                {isBrowser && this.renderSaveCancelButtons()}
                {this.renderHeader(this.state.editMode)}
                {this.renderModelMainSection(this.state.editMode)}
                {this.renderWorkLog(this.state.editMode)}
                {this.renderSaveCancelButtons()}
            </form>
        );
    }
}

ContactUpdateForm = reduxForm({
    form: "updateContact",
    validate: ValidationsContactForm.contactFormValidate,
    enableReinitialize: true,
    onSubmitSuccess: (result, dispatch, props) => {
        document.documentElement.scrollTop = 0;
    }
})(ContactUpdateForm);

const ContactUpdateFormFragment = createRefetchContainer(
    withTranslation()(ContactUpdateForm),
    {
        contact: graphql`
            fragment ContactUpdateForm_contact on Contact {
                id
                name
                notes
                title
                contact_type
                first_name
                last_name
                pgp_fingerprint
                emails {
                    id
                    name
                    type
                }
                phones {
                    id
                    name
                    type
                }
                roles {
                    relation_id
                    role_data {
                        id
                        name
                    }
                    end {
                        id
                        name
                    }
                }
                created
                creator {
                    email
                }
                modified
                modifier {
                    email
                }
                comments {
                    id
                    user {
                        first_name
                        last_name
                    }
                    comment
                    submit_date
                }
            }
        `
    },
    graphql`
        # Refetch query to be fetched upon calling 'refetch'.
        # Notice that we re-use our fragment and the shape of this query matches our fragment spec.
        query ContactUpdateFormRefetchQuery($contactId: ID!) {
            getContactById(id: $contactId) {
                ...ContactUpdateForm_contact
            }
        }
    `
);

export default ContactUpdateFormFragment;
