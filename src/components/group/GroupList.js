import React from "react";
import PropTypes from "prop-types";
import { createPaginationContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";

import { ITEMS_PER_PAGE } from "../../constants";
import GroupRow from "./GroupRow";
import FilterColumnsContainer from "../../containers/FilterColumns";

import "../../style/ModelList.scss";

//mock for when the backend is ready
const defaultColumns = [
    { name: "Name", value: "name" },
    { name: "Description", value: "description", filter: "order" }
];

export class GroupList extends React.PureComponent {
    static propTypes = {
        groups: PropTypes.object.isRequired
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
        // Redirection to group detail
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
                    model="group"
                    filterColumns={this.handleFilterColumns}
                />
            </>
        );
    }

    renderList() {
        let models = this.props.groups;
        return (
            <>
                {models.groups.edges.map(({ node }) => {
                    return (
                        <GroupRow
                            key={node.handle_id}
                            group={node}
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
                <Button onClick={() => this._loadMore()} variant="outline-primary">
                    {t("paginator.load_more")}
                </Button>
            </>
        );
    }
}

export default createPaginationContainer(
    withTranslation()(withRouter(GroupList)),
    {
        groups: graphql`
            fragment GroupList_groups on Query
                @argumentDefinitions(
                    count: { type: "Int" }
                    cursor: { type: "String" }
                    filter: { type: GroupFilter }
                    orderBy: { type: GroupOrderBy }
                ) {
                groups(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
                    @connection(key: "GroupList_groups", filters: []) {
                    edges {
                        node {
                            handle_id
                            ...GroupRow_group
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
            query GroupListForwardQuery($count: Int!, $cursor: String, $orderBy: GroupOrderBy) {
                ...GroupList_groups @arguments(count: $count, cursor: $cursor, orderBy: $orderBy)
            }
        `,
        getConnectionFromProps(props) {
            return props.groups && props.groups.groups;
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
