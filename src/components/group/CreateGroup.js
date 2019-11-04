import React from "react";
import CreateGroupFormContainer from "../../containers/group/CreateGroupForm";
import CreateGroupMutation from "../../mutations/group/CreateGroupMutation";

class CreateGroup extends React.Component {
    componentWillUnmount() {}
    handleSubmit = (group) => {
        CreateGroupMutation(group, this.props.history);
    };

    render() {
        return <CreateGroupFormContainer onSubmit={this.handleSubmit} />;
    }
}

export default CreateGroup;
