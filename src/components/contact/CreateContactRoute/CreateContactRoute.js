import React from "react";
import { withTranslation } from "react-i18next";
import CreateContactFormContainer from "../../../containers/contact/CreateContactForm";
import { withRouter } from "react-router-dom";

class CreateContactRoute extends React.Component {
    render() {
        return <CreateContactFormContainer history={this.props.history} />;
    }
}

export default withTranslation()(withRouter(CreateContactRoute));
