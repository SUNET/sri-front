import React from "react";
import PropTypes from "prop-types";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import Table from "react-bootstrap/Table";

import Contact from "./Contact";

class ModelList extends React.PureComponent {
    static propTypes = {
        viewer: PropTypes.object.isRequired,
        // data: PropTypes.arrayOf(PropTypes.object).isRequired,
        // total: PropTypes.number.isRequired,
        // loading: PropTypes.bool.isRequired,
        // search: PropTypes.string.isRequired,
        // queried: PropTypes.bool.isRequired
    };

    handleOnClick = (event, data) => {
        console.log(this.props);
        this.props.history.push(`/contact/${data.name}`)
    };

    getData() {
        let models = this.props.viewer.allContacts;
        models = models.edges.map(({ node }) => (
            <Contact
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
            ...Contact_viewer
            allContacts(last: 100, orderBy: createdAt_DESC)
                @connection(key: "ModelList_allContacts", filters: []) {
                edges {
                    node {
                        id
                        name
                        ...Contact_contact
                    }
                }
            }
        }
    `
);
