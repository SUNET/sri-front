import ___EntityClassName__FormParentClass from "./___EntityClassName__FormParentClass";
// Common imports
import React from "react";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";
import { reduxForm } from "redux-form";
import Create__EntityClassName__Mutation from "../../mutations/__entityName__/Create__EntityClassName__Mutation";
import Validations__EntityClassName__Form from "./Validations__EntityClassName__Form";
// const
import { CREATE_GROUP_FORM } from "../../utils/constants";
import { isBrowser } from "react-device-detect";

class __EntityClassName__UpdateForm extends _BasicFormParentClass {
    IS_UPDATED_FORM = false;
    FORM_ID = CREATE_GROUP_FORM;
    state = {
        errors: []
    };
    handleSubmit = (__entityName__) => {
        Create__EntityClassName__Mutation(__entityName__, this);
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

Create__EntityClassName__Form = reduxForm({
    form: "create__EntityClassName__",
    validate: Validations__EntityClassName__Form.validate,
    initialValues: {
        name: ""
    }
})(Create__EntityClassName__Form);

export default withTranslation()(withRouter(Create__EntityClassName__Form));
