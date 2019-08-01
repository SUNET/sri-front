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
                {(this.props.columnsVisible["name"] || this.props.showAllColumns) && (
                    <div>
                        {contact.first_name} {contact.last_name}
                    </div>
                )}
                {(this.props.columnsVisible["organization"] || this.props.showAllColumns) && (
                    <div>
                        {contact.member_of_groups.map((organization) => {
                            return organization.name;
                        })}
                    </div>
                )}
                {(this.props.columnsVisible["roles"] || this.props.showAllColumns) && (
                    <div>
                        {contact.roles.map((role) => {
                            return "";
                        })}
                    </div>
                )}
                {(this.props.columnsVisible["contact_type"] || this.props.showAllColumns) && (
                    <div>{contact.contact_type}</div>
                )}
                <div></div>
            </article>
        );
    }
}

const ContactRowFragment = createFragmentContainer(ContactRow, {
    contact: graphql`
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
});

export default ContactRowFragment;
