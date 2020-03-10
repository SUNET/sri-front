import _BasicFormParentClass from "../common/_BasicFormParentClass";
// Common imports
import React from "react";
import { withTranslation } from "react-i18next";
import { reduxForm } from "redux-form";
import { createRefetchContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
// import Update__EntityClassName__Mutation from "../../mutations/__entityName__/Update__EntityClassName__Mutation";
// import Validations__EntityClassName__Form from "./Validations__EntityClassName__Form";
// const
import { UPDATE___CONST_NAME___FORM } from "../../utils/constants";
import { isBrowser } from "react-device-detect";

class __EntityClassName__UpdateForm extends _BasicFormParentClass {
    IS_UPDATED_FORM = true;
    FORM_ID = UPDATE___CONST_NAME___FORM;
    MODEL_NAME = "__entityName__";
    ROUTE_LIST_DIRECTION = "/__entityBlock__/__entityName__s";
    state = {
        editMode: false
    };
    refetch = () => {
        this.props.relay.refetch(
            { __entityName__Id: this.props.__entityName__.id }, // Our refetchQuery needs to know the `__entityName__ID`
            null, // We can use the refetchVariables as renderVariables
            () => {
                console.log("Refetch done");
            },
            { force: true }
        );
    };
    handleSubmit = (__entityName__) => {
        this.setState({ editMode: !this.state.editMode });
        // Update__EntityClassName__Mutation(__entityName__, this);
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

__EntityClassName__UpdateForm = reduxForm({
    form: "update__EntityClassName__",
    // validate: Validations__EntityClassName__Form.validate,
    enableReinitialize: true,
    onSubmitSuccess: (result, dispatch, props) => {
        document.documentElement.scrollTop = 0;
    }
})(__EntityClassName__UpdateForm);

const __EntityClassName__UpdateFragment = createRefetchContainer(
    withTranslation()(__EntityClassName__UpdateForm),
    {
        __entityName__: graphql`
            fragment __EntityClassName__UpdateForm___entityName__ on __EntityClassName__ {
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
        query __EntityClassName__UpdateFormRefetchQuery($__entityName__Id: ID!) {
            get__EntityClassName__ById(id: $__entityName__Id) {
                ...__EntityClassName__UpdateForm___entityName__
            }
        }
    `
);

export default __EntityClassName__UpdateFragment;
