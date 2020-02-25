import React from "react";
import { Form, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { FieldArray, Field, reduxForm } from "redux-form";
import CreateGroupMutation from "../../mutations/group/CreateGroupMutation";
import FieldArrayMembersGroup from "./FieldArrayMembersGroup";
import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";
import EditField from "../EditField";
import FieldInput from "../FieldInput";
import { isBrowser, isMobile } from "react-device-detect";

import ValidationsGroupForm from "./ValidationsGroupForm";

import _GroupFormParentClass from "./_GroupFormParentClass";

import { CREATE_GROUP_FORM } from "../../utils/constants";

class CreateGroupForm extends _GroupFormParentClass {
    IS_UPDATED_FORM = false;
    FORM_ID = CREATE_GROUP_FORM;
    state = {
        errors: []
    };
    handleSubmit = (group) => {
        CreateGroupMutation(group, this);
    };
    render() {
        const { handleSubmit } = this.props;
        const editMode = true;
        return (
            <form id={this.FORM_ID} onSubmit={handleSubmit(this.handleSubmit)}>
                {isBrowser && this.renderSaveCancelButtons()}
                <div className="model-details create-contact-form">
                    {this.renderHeader(editMode)}
                    {this.renderModelMainSection(editMode)}
                    {this.renderWorkLog(editMode)}
                </div>
                {this.renderSaveCancelButtons()}
            </form>
        );
    }
}

CreateGroupForm = reduxForm({
    form: "createGroup",
    validate: ValidationsGroupForm.validate,
    initialValues: {
        name: ""
    }
})(CreateGroupForm);

export default withTranslation()(withRouter(CreateGroupForm));
