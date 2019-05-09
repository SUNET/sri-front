import React from "react";
import PropTypes from "prop-types";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import Table from "react-bootstrap/Table";

import ContactRow from "./ContactRow";

class ModelList extends React.PureComponent {
    static propTypes = {
        viewer: PropTypes.object.isRequired,
    };

    handleOnClick = (event, data) => {
        this.props.history.push(`/contact/${data.id}`)
    };

    getData() {
        let models = this.props.viewer.allContacts;
        models = models.edges.map(({ node }) => (
            <ContactRow
                key={node.id}
                contact={node}
                viewer={this.props.viewer}
                onClick={this.handleOnClick}
            />
        ));
        return models;
    }

    renderTable() {
        return (
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>{this.getData()}</tbody>
            </Table>
        );
    }
    render() {
        return <section>{this.renderTable()}</section>;
    }
}

export default createFragmentContainer(
    ModelList,
    graphql`
        fragment ModelList_viewer on Viewer {
            ...ContactRow_viewer
            allContacts(last: 100, orderBy: createdAt_DESC)
                @connection(key: "ModelList_allContacts", filters: []) {
                edges {
                    node {
                        id
                        name
                        firstName
                        lastName
                        email
                        phone
                        handleId
                        nodeName
                        nodeMetaType
                        ...ContactRow_contact
                    }
                }
            }
        }
    `
);
