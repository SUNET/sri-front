import React from "react";
import PropTypes from "prop-types";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

class Contact extends React.PureComponent {
    static propTypes = {
        contact: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired
    };

    render() {
        let contact = this.props.contact;

        return (
            <tr onClick={(e) => this.props.onClick(e, contact)}>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
            </tr>
        );
    }
}

const FragmentContainer = createFragmentContainer(
    Contact,
    graphql`
        fragment Contact_viewer on Viewer {
            id
        }
        fragment Contact_contact on Contact {
            id
            name
        }
    `
);

export default FragmentContainer;
