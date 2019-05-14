import React from "react";
import PropTypes from "prop-types";
// import { createFragmentContainer } from "react-relay";
// import graphql from "babel-plugin-relay/macro";

class ContactRow extends React.PureComponent {
    static propTypes = {
        contact: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired
    };

    render() {
        let contact = this.props.contact;

        return (
            <tr onClick={(e) => this.props.onClick(e, contact)}>
                <td>{contact.id}</td>
                <td>{contact.first_name} {contact.last_name}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
            </tr>
        );
    }
}

export default ContactRow;
