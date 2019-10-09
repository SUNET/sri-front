import React from "react";
import { reset } from "redux-form";
import CreateGroupFormContainer from "../../containers/CreateGroupForm";
import CreateGroupMutation from "../../mutations/CreateGroupMutation";

class CreateGroup extends React.Component {
    handleSubmit = (group) => {
        CreateGroupMutation(group, this.props.history);
    };

    render() {
        return <CreateGroupFormContainer onSubmit={this.handleSubmit} />;
    }
}

export default CreateGroup;
