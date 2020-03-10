import _BasicFormParentClass from "../common/_BasicFormParentClass";
// Common imports
import React from "react";
import { withTranslation } from "react-i18next";
import { reduxForm } from "redux-form";
import { createRefetchContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
// import UpdateSiteOwnerMutation from "../../mutations/siteOwner/UpdateSiteOwnerMutation";
// import ValidationsSiteOwnerForm from "./ValidationsSiteOwnerForm";
// const
import { UPDATE_SITEOWNER_FORM } from "../../utils/constants";
import { isBrowser } from "react-device-detect";

class SiteOwnerUpdateForm extends _BasicFormParentClass {
    IS_UPDATED_FORM = true;
    FORM_ID = UPDATE_SITEOWNER_FORM;
    MODEL_NAME = "siteOwner";
    ROUTE_LIST_DIRECTION = "/network/siteOwners";
    state = {
        editMode: false
    };
    refetch = () => {
        this.props.relay.refetch(
            { siteOwnerId: this.props.siteOwner.id }, // Our refetchQuery needs to know the `siteOwnerID`
            null, // We can use the refetchVariables as renderVariables
            () => {
                console.log("Refetch done");
            },
            { force: true }
        );
    };
    handleSubmit = (siteOwner) => {
        this.setState({ editMode: !this.state.editMode });
        // UpdateSiteOwnerMutation(siteOwner, this);
    };
    render() {
        let { handleSubmit } = this.props;
        const { editMode } = this.state;
        const showBackButton = isBrowser;
        return (
            <form id={this.FORM_ID} onSubmit={handleSubmit(this.handleSubmit)}>
                {/* {isBrowser && this.renderSaveCancelButtons()} */}
                {this.renderHeader(editMode, showBackButton)}
                {this.renderModelMainSection(editMode)}
                {this.renderWorkLog()}
                {/* {this.renderSaveCancelButtons()} */}
            </form>
        );
    }
}

SiteOwnerUpdateForm = reduxForm({
    form: "updateSiteOwner",
    // validate: ValidationsSiteOwnerForm.validate,
    enableReinitialize: true,
    onSubmitSuccess: (result, dispatch, props) => {
        document.documentElement.scrollTop = 0;
    }
})(SiteOwnerUpdateForm);

const SiteOwnerUpdateFragment = createRefetchContainer(
    withTranslation()(SiteOwnerUpdateForm),
    {
        siteOwner: graphql`
            fragment SiteOwnerUpdateForm_siteOwner on SiteOwner {
                id
                name
                description
                url
                created
                creator {
                    email
                }
                modified
                modifier {
                    email
                }
            }
        `
    },

    graphql`
        # Refetch query to be fetched upon calling 'refetch'.
        # Notice that we re-use our fragment and the shape of this query matches our fragment spec.
        query SiteOwnerUpdateFormRefetchQuery($siteOwnerId: ID!) {
            getSiteOwnerById(id: $siteOwnerId) {
                ...SiteOwnerUpdateForm_siteOwner
            }
        }
    `
);

export default SiteOwnerUpdateFragment;
