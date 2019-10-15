import React from "react";
import CreateContactFormContainer from "../../containers/contact/CreateContactForm";
import CreateContactMutation from "../../mutations/contact/CreateContactMutation";

class CreateContact extends React.Component {
    componentWillUnmount() {}
    handleSubmit = (contact) => {
        CreateContactMutation(contact, this.props.history);
    };

    render() {
        return <CreateContactFormContainer onSubmit={this.handleSubmit} />;
    }
}

export default CreateContact;
