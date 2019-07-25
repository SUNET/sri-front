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
            <article onClick={(e) => this.props.onClick(e, contact)}>
                {(this.props.columnsVisible["Name"] || this.props.showAllColumns) && (
                    <div>
                        {contact.first_name} {contact.last_name}
                    </div>
                )}
                {(this.props.columnsVisible["Organization"] || this.props.showAllColumns) && (
                    <div>
                        {contact.member_of_groups.map((organization) => {
                            return organization.name;
                        })}
                    </div>
                )}
                {(this.props.columnsVisible["Roles"] || this.props.showAllColumns) && (
                    <div>
                        {contact.roles.map((role) => {
                            return role.name;
                        })}
                    </div>
                )}
                {(this.props.columnsVisible["Contact Type"] || this.props.showAllColumns) && (
                    <div>{contact.contact_type}</div>
                )}
                <div></div>
            </article>
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
            modified
            roles {
                name
            }
            member_of_groups {
                name
            }
        }
    `
);

export default ContactRowFragment;
