import _CableFormParentClass from "./_CableFormParentClass";
// Common imports
import React from "react";
import { withTranslation } from "react-i18next";
import { reduxForm } from "redux-form";
import { createRefetchContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import UpdateCableMutation from "../../mutations/cable/UpdateCableMutation";
import ValidationsCableForm from "./ValidationsCableForm";
// const
import { UPDATE_CABLE_FORM } from "../../utils/constants";
import { isBrowser } from "react-device-detect";

class CableUpdateForm extends _CableFormParentClass {
    IS_UPDATED_FORM = true;
    FORM_ID = UPDATE_CABLE_FORM;
    MODEL_NAME = "cable";
    ROUTE_LIST_DIRECTION = "/network/cables";
    state = {
        editMode: false
    };
    refetch = () => {
        this.props.relay.refetch(
            { cableId: this.props.cable.id }, // Our refetchQuery needs to know the `cableID`
            null, // We can use the refetchVariables as renderVariables
            () => {
                console.log("Refetch done");
            },
            { force: true }
        );
    };
    handleSubmit = (cable) => {
        this.setState({ editMode: !this.state.editMode });
        UpdateCableMutation(cable, this);
    };

    render() {
        let { handleSubmit } = this.props;
        const { editMode } = this.state;
        const showBackButton = isBrowser;
        return (
            <form id={this.FORM_ID} onSubmit={handleSubmit(this.handleSubmit)}>
                {isBrowser && this.renderSaveCancelButtons()}
                {this.renderHeader(editMode, showBackButton)}
                {this.renderModelMainSection(editMode)}
                {this.renderWorkLog()}
                {this.renderSaveCancelButtons()}
            </form>
        );
    }
}

CableUpdateForm = reduxForm({
    form: "updateCable",
    validate: ValidationsCableForm.validate,
    enableReinitialize: true,
    onSubmitSuccess: (result, dispatch, props) => {
        document.documentElement.scrollTop = 0;
    }
})(CableUpdateForm);

const CableUpdateFragment = createRefetchContainer(
    withTranslation()(CableUpdateForm),
    {
        cable: graphql`
            fragment CableUpdateForm_cable on Cable {
                id
                name
                description
                cable_type
                comments {
                    id
                    user {
                        first_name
                        last_name
                    }
                    comment
                    submit_date
                }
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
        query CableUpdateFormRefetchQuery($cableId: ID!) {
            getCableById(id: $cableId) {
                ...CableUpdateForm_cable
            }
        }
    `
);

export default CableUpdateFragment;
