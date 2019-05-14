import React from "react";
import PropTypes from "prop-types";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Button, Table } from "react-bootstrap";

import ContactRow from "./ContactRow";
import { ITEMS_PER_PAGE } from "../constants";

class ContactList extends React.PureComponent {
    static propTypes = {
        contacts: PropTypes.object.isRequired,
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
        console.log(this.props);
        let models = this.props.contacts;
        models = models.edges.map(({ node }) => (
            <ContactRow
                key={node.id}
                contact={node}
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

export default createFragmentContainer(
    ContactList,
    graphql`
        fragment ContactList_contacts on ContactConnection
            @connection(key: "ContactList_contacts", filters: []) {
                edges{
                    node{

                        handle_id
                        name
                        first_name
                        last_name
                        is_roles {
                            name
                        }
                        member_of_groups {
                            name
                        }
                    }
                }
        }
    `
);
