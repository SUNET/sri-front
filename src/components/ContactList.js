import React from "react";
import PropTypes from "prop-types";
import { createPaginationContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Button, Table } from "react-bootstrap";

import ContactRow from "./ContactRow";
import { ITEMS_PER_PAGE } from "../constants";

class ContactList extends React.PureComponent {
    static propTypes = {
        viewer: PropTypes.object.isRequired,
        filterValue: PropTypes.string.isRequired
    };

    _loadMore = () => {
        if (!this.props.relay.hasMore()) {
            console.log(`Nothing more to load`);
            return;
        } else if (this.props.relay.isLoading()) {
            console.log(`Request is already pending`);
            return;
        }

        this.props.relay.loadMore(ITEMS_PER_PAGE);
    };

    _handleOnClick = (event, data) => {
        this.props.history.push(`/contact/${data.id}`);
    };

    getData() {
        let models = this.props.viewer.allContacts;
        models = models.edges.map(({ node }) => (
            <ContactRow
                key={node.id}
                contact={node}
                viewer={this.props.viewer}
                onClick={this._handleOnClick}
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
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>{this.getData()}</tbody>
            </Table>
        );
    }
    render() {
        return (
            <section>
                {this.renderTable()}
                <Button
                    onClick={() => this._loadMore()}
                    variant="outline-primary"
                >
                    Load More
                </Button>
            </section>
        );
    }
}

export default createPaginationContainer(
    ContactList,
    graphql`
        fragment ContactList_viewer on Viewer {
            ...ContactRow_viewer
            allContacts(
                first: $count
                after: $after
                filter: $filter
                orderBy: createdAt_ASC
            ) @connection(key: "ContactList_allContacts", filters: []) {
                edges {
                    node {
                        id
                        name
                        firstName
                        lastName
                        email
                        phone
                        nodeName
                        nodeMetaType
                        ...ContactRow_contact
                    }
                }
                pageInfo {
                    hasNextPage
                    endCursor
                }
            }
        }
    `,
    {
        direction: "forward",
        query: graphql`
            query ContactListForwardQuery(
                $count: Int!
                $after: String
                $filter: ContactFilter
            ) {
                viewer {
                    ...ContactList_viewer
                }
            }
        `,
        getConnectionFromProps(props) {
            return props.viewer && props.viewer.allContacts;
        },
        getFragmentVariables(previousVariables, totalCount) {
            return {
                ...previousVariables,
                count: totalCount
            };
        },
        getVariables(props, paginationInfo, fragmentVariables) {
            return {
                count: paginationInfo.count,
                after: paginationInfo.cursor
            };
        }
    }
);
