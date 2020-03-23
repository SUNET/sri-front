import _PortFormParentClass from "./_PortFormParentClass";
// Common imports
import React from "react";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";
import { reduxForm } from "redux-form";
import CreatePortMutation from "../../mutations/port/CreatePortMutation";
import ValidationsPortForm from "../common/_BasicValidationForm";
// const
import { CREATE_PORT_FORM } from "../../utils/constants";
import { isBrowser } from "react-device-detect";

class CreatePortForm extends _PortFormParentClass {
    IS_UPDATED_FORM = false;
    FORM_ID = CREATE_PORT_FORM;
    state = {
        errors: []
    };
    handleSubmit = (port) => {
        CreatePortMutation(port, this);
    };
    render() {
        const { handleSubmit } = this.props;
        const editMode = true;
        const showBackButton = isBrowser;
        return (
            <form id={this.FORM_ID} onSubmit={handleSubmit(this.handleSubmit)}>
                {isBrowser && this.renderSaveCancelButtons()}
                <div className="model-details create-contact-form">
                    {this.renderHeader(editMode, showBackButton)}
                    {this.renderModelMainSection(editMode)}
                    {this.renderWorkLog(editMode)}
                </div>
                {this.renderSaveCancelButtons()}
            </form>
        );
    }
}

CreatePortForm = reduxForm({
    form: "createPort",
    validate: ValidationsPortForm.validate,
    initialValues: {
        name: ""
    }
})(CreatePortForm);

export default withTranslation()(withRouter(CreatePortForm));
