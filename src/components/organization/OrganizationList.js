import React from "react";
import PropTypes from "prop-types";
import { createPaginationContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";

import { ITEMS_PER_PAGE } from "../../constants";
import OrganizationRow from "./OrganizationRow";
import FilterColumnsContainer from "../../containers/FilterColumns";

import "../../style/ModelList.scss";

//mock for when the backend is ready
const defaultColumns = [
    { name: "Name", value: "name" },
    { name: "Organization ID", value: "organization_id" },
    { name: "Type", value: "type", filter: "order" },
    { name: "Affiliation", value: "afffiliation", filter: "order" },
    { name: "Parent Organization ID", value: "parent_organization_id", filter: "order" }
];

export class OrganizationList extends React.PureComponent {
    static propTypes = {
        organizations: PropTypes.object.isRequired
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
        // Redirection to organization detail
        console.log(`${this.props.match.url}/${data.handle_id}`);
        this.props.history.push(`${this.props.match.url}/${data.handle_id}`);
    };

    renderHeaderList() {
        return (
            <>
                <div></div>
                {defaultColumns.map((column) => {
                    // Hiding the columns passed by props
                    if (this.props.columns_visible[column.value] === true || this.props.all_columns) {
                        return (
                            <div key={column.name}>
                                {column.name}
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
                <FilterColumnsContainer
                    type="hidden-col"
                    columns={defaultColumns}
                    model="organization"
                    filterColumns={this.handleFilterColumns}
                />
            </>
        );
    }

    renderList() {
        let models = this.props.organizations;
        return (
            <>
                {models.organizations.edges.map(({ node }) => {
                    return (
                        <OrganizationRow
                            key={node.handle_id}
                            organization={node}
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
            <>
                <div className="model-list">
                    <div>{this.renderHeaderList()}</div>
                    <div>{this.renderList()}</div>
                </div>
                <div className="mt-1 text-right">
                    <button onClick={() => this._loadMore()} className="btn outline btn-load">
                        {t("paginator.load_more")}
                    </button>
                </div>
            </>
        );
    }
}

export default createPaginationContainer(
    withTranslation()(withRouter(OrganizationList)),
    {
        organizations: graphql`
            fragment OrganizationList_organizations on Query
                @argumentDefinitions(
                    count: { type: "Int" }
                    cursor: { type: "String" }
                    filter: { type: OrganizationFilter }
                    orderBy: { type: OrganizationOrderBy }
                ) {
                organizations(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
                    @connection(key: "OrganizationList_organizations", filters: []) {
                    edges {
                        node {
                            handle_id
                            ...OrganizationRow_organization
                        }
                    }
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                }
            }
        `
    },
    {
        direction: "forward",
        query: graphql`
            # Pagination query to be fetched upon calling 'loadMore'.
            # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
            query OrganizationListForwardQuery($count: Int!, $cursor: String, $orderBy: OrganizationOrderBy) {
                ...OrganizationList_organizations @arguments(count: $count, cursor: $cursor, orderBy: $orderBy)
            }
        `,
        getConnectionFromProps(props) {
            return props.organizations && props.organizations.organizations;
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
