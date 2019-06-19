import React from "react";
import PropTypes from "prop-types";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import FieldSwitch from "../FieldSwitch";

import "../../style/ModelRow.scss"

class ContactRow extends React.PureComponent {
    static propTypes = {
        contact: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired
    };

    formatDate = (dateString) => {
        let date = new Date(dateString);
        return date.toISOString("YYYY-MM-DD");
    }

    render() {
        let contact = this.props.contact;
        return (
            <article className="model-row">
                <div>
                    <FieldSwitch
                        type="toggle-icon"
                        icon="plus"
                        labelChecked="UNFOLLOW"
                        labelUnChecked="FOLLOW"
                        onChange={(e) => {}}
                    />
                </div>
                <div>
                    <div>
                        {contact.first_name} {contact.last_name}
                    </div>
                    <span>{contact.is_roles.map((role) => {
                        return role.name
                    })}</span>
                </div>
                <div>Last update: {this.formatDate(contact.modified)}</div>
                <button onClick={(e) => this.props.onClick(e, contact)}>
                    SEE DETAILS<FontAwesomeIcon icon={faAngleRight} />
                </button>
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
            phone
            email
            modified
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
