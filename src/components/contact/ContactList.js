import React from "react";
import PropTypes from "prop-types";
import { createPaginationContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";

import { ITEMS_PER_PAGE } from "../../constants";
import ContactRow from "./ContactRow";
import FilterColumnsContainer from "../../containers/FilterColumns";

import "../../style/ModelList.scss";

//mock for when the backend is ready
const defaultColumns = [
    { name: "Name", value: "name" },
    { name: "Organization", value: "organization", filter: "order" },
    { name: "Roles", value: "roles" },
    { name: "Contact Type", value: "contact_type" }
];

export class ContactList extends React.PureComponent {
    static propTypes = {
        contacts: PropTypes.object.isRequired
    };

    _loadMore = () => {
        if (!this.props.relay.hasMore()) {
            console.log(`Nothing more to load`);
            return;
        } else if (this.props.relay.isLoading()) {
            console.log(`Request is already pending`);
            return;
        }
        this.props.changeCount(ITEMS_PER_PAGE);
        this.props.relay.loadMore(ITEMS_PER_PAGE);
    };

    handleFilterColumns = () => {};

    _handleOnClick = (event, data) => {
        // Redirection to contact detail
        this.props.history.push(`${this.props.match.url}/${data.handle_id}`);
    };

    renderHeaderList() {
        return (
            <>
                <div></div>
                {defaultColumns.map((column, index) => {
                    // Hiding the columns passed by props
                    if (this.props.columns_visible[column.value] || this.props.all_columns) {
                        return (
                            <div key={index}>
                                {column.name}
                                {column.filter === "order" && (
                                    <FilterColumnsContainer
                                        type="order"
                                        columns={this.props.organization_types.getChoicesForDropdown}
                                    />
                                )}
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
                <FilterColumnsContainer
                    type="hidden-col"
                    columns={defaultColumns}
                    filterColumns={this.handleFilterColumns}
                />
            </>
        );
    }

    renderList() {
        console.log(this.props);
        let models = this.props.contacts;
        return (
            <>
                {models.contacts.edges.map(({ node }) => {
                    return (
                        <ContactRow
                            key={node.__id}
                            contact={node}
                            onClick={this._handleOnClick}
                            columnsVisible={this.props.columns_visible}
                            showAllColumns={this.props.all_columns}
                        />
                    );
                })}
            </>
        );
    }

    render() {
        const { t } = this.props;
        return (
            <section>
                <div className="model-list">
                    <div>{this.renderHeaderList()}</div>
                    <div>{this.renderList()}</div>
                </div>
                <Button onClick={() => this._loadMore()} variant="outline-primary">
                    {t("paginator.load_more")}
                </Button>
            </section>
        );
    }
}

export default createPaginationContainer(
    withTranslation()(withRouter(ContactList)),
    {
        contacts: graphql`
            fragment ContactList_contacts on Query
                @argumentDefinitions(
                    count: { type: "Int" }
                    cursor: { type: "String" }
                    filter: { type: ContactFilter }
                    orderBy: { type: ContactOrderBy }
                ) {
                contacts(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
                    @connection(key: "ContactList_contacts", filters: []) {
                    edges {
                        node {
                            handle_id
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
        organization_types: graphql`
            fragment ContactList_organization_types on Query {
                getChoicesForDropdown(name: "organization_types") {
                    name
                    value
                }
            }
        `
    },
    {
        direction: "forward",
        query: graphql`
            # Pagination query to be fetched upon calling 'loadMore'.
            # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
            query ContactListForwardQuery($count: Int!, $cursor: String, $orderBy: ContactOrderBy) {
                ...ContactList_contacts @arguments(count: $count, cursor: $cursor, orderBy: $orderBy)
            }
        `,
        getConnectionFromProps(props) {
            return props.contacts && props.contacts.contacts;
        },
        // This is also the default implementation of `getFragmentVariables` if it isn't provided.
        getFragmentVariables(previousVariables, totalCount) {
            return {
                ...previousVariables,
                count: totalCount
            };
        },
        getVariables(props, paginationInfo, fragmentVariables) {
            return {
                count: paginationInfo.count,
                cursor: paginationInfo.cursor,
                orderBy: fragmentVariables.orderBy
            };
        }
    }
);
