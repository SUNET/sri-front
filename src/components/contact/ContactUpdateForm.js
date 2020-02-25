import React from "react";
import PropTypes from "prop-types";
import { createRefetchContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { FieldArray, Field, reduxForm } from "redux-form";

import InfoCreatorModifier from "../InfoCreatorModifier";
import EditField from "../EditField";
import FieldInput from "../FieldInput";
import Worklog from "../Worklog";
import Dropdown from "../Dropdown";
import FieldArrayOrganizationsContact from "./FieldArrayOrganizationsContact";
import UpdateContactMutation from "../../mutations/contact/UpdateContactMutation";
import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";
import ContactPhones from "./ContactPhones";
import ContactEmails from "./ContactEmails";
import BackCTA from "../common/BackCTA";
import ValidationsContactForm from "./ValidationContactForm";
import { isBrowser, isMobile, isTablet } from "react-device-detect";

import { UPDATE_CONTACT_FORM } from "../../utils/constants";

import "../../style/ModelDetails.scss";

import _CreateAndUpdateFormParent from "../common/_FormParentClass";

class ContactUpdateForm extends _CreateAndUpdateFormParent {
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
