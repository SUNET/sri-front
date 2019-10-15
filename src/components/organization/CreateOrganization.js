import React from "react";
import CreateOrganizationFormContainer from "../../containers/organization/CreateOrganizationForm";
import CreateOrganizationMutation from "../../mutations/organization/CreateOrganizationMutation";

class CreateOrganization extends React.Component {
    componentWillUnmount() {}
    handleSubmit = (organization) => {
        CreateOrganizationMutation(organization, this.props.history);
    };

    render() {
        return <CreateOrganizationFormContainer onSubmit={this.handleSubmit} />;
    }
}

export default CreateOrganization;
