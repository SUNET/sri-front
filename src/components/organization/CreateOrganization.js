import React from "react";
import CreateOrganizationFormContainer from "../../containers/CreateGroupForm";
import CreateOrganizationMutation from "../../mutations/CreateGroupMutation";

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
