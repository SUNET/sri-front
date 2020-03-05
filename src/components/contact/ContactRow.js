import React from "react";
import PropTypes from "prop-types";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import "../../style/ModelRow.scss";

class ContactRow extends React.PureComponent {
    static propTypes = {
        contact: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired
    };

    formatDate = (dateString) => {
        let date = new Date(dateString);
        return date.toISOString("YYYY-MM-DD");
    };

    render() {
        let contact = this.props.contact;
        return (
            <tr onClick={(e) => this.props.onClick(e, contact)}>
                {(this.props.columnsVisible["name"] || this.props.showAllColumns) && (
                    <td>
                        {contact.first_name} {contact.last_name}
                    </td>
                )}
                {(this.props.columnsVisible["organization"] || this.props.showAllColumns) && (
                    <td>
                        {contact.roles.map((role, index) => {
                            return (
                                <span key={index}>
                                    {role.end && (
                                        <>
                                            {role.end.name}
                                            {contact.roles[index + 1] ? ", " : ""}
                                        </>
                                    )}
                                </span>
                            );
                        })}
                    </td>
                )}
                {(this.props.columnsVisible["roles"] || this.props.showAllColumns) && (
                    <td>
                        {contact.roles.map((role, index) => {
                            return (
                                <span key={index}>
                                    {role.name}
                                    {contact.roles[index + 1] ? ", " : ""}
                                </span>
                            );
                        })}
                    </td>
                )}
                {(this.props.columnsVisible["contact_type"] || this.props.showAllColumns) && (
                    <td>{contact.contact_type}</td>
                )}
                <td></td>
            </tr>
        );
    }
}

const ContactRowFragment = createFragmentContainer(ContactRow, {
    contact: graphql`
        fragment ContactRow_contact on Contact {
            id
            first_name
            last_name
            contact_type
            modified
            roles {
                name
                end {
                    name
                }
            }
        }
    `
});

export default ContactRowFragment;
