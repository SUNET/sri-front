import React from "react";
import { reduxForm } from "redux-form";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";
import ValidationsContactForm from "./ValidationContactForm";
import CreateContactForm from "../CreateContactForm";

class CreateContactForModal extends React.Component {
    render() {
        return <CreateContactForm></CreateContactForm>;
    }
}

CreateContactForModal = reduxForm({
    form: "createContact",
    validate: ValidationsContactForm.contactFormValidate,
    initialValues: {}
})(CreateContactForModal);

export default withTranslation()(withRouter(CreateContactForModal));
