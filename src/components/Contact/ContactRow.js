import React from "react";
import PropTypes from "prop-types";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

class ContactRow extends React.PureComponent {
    static propTypes = {
        contact: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired
    };

    render() {
        let contact = this.props.contact;
        return (
            <tr onClick={(e) => this.props.onClick(e, contact)}>
                <td>{contact.handle_id}</td>
                <td>{contact.contact_type}</td>
                <td>
                    {contact.first_name} {contact.last_name}
                </td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
            </tr>
        );
    }
}

const ContactRowFragment = createFragmentContainer(
    ContactRow,
    graphql`
        fragment ContactRow_contact on Contact {
            handle_id
            name
            first_name
            last_name
            contact_type
            phone
            email
            is_roles {
                name
            }
            member_of_groups {
                name
            }
        }
    `
);

export default ContactRowFragment;
