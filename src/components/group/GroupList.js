import React from "react";
import PropTypes from "prop-types";
import { createPaginationContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import { ITEMS_PER_PAGE, ALL_ITEMS } from "../../config";
import GroupRow from "./GroupRow";
import FilterColumnsContainer from "../../containers/FilterColumns";

import "../../style/ModelList.scss";

export class GroupList extends React.PureComponent {
    static propTypes = {
        groups: PropTypes.object.isRequired
    };

    _loadMore = (type) => {
        let itemsPerLoad = ITEMS_PER_PAGE;
        if (type === "all") {
            itemsPerLoad = ALL_ITEMS;
        }
        if (!this.props.relay.hasMore()) {
            console.log(`Nothing more to load`);
            return;
        } else if (this.props.relay.isLoading()) {
            console.log(`Request is already pending`);
            return;
        }

        this.props.changeCount(itemsPerLoad);
        this.props.relay.loadMore(itemsPerLoad, () => {
            this.forceUpdate(); // this fixed updated props because relay doesn't do it.
        });
    };

    handleFilterColumns = () => {};

    _handleOnClick = (event, data) => {
        // Redirection to group detail
        this.props.history.push(`${this.props.match.url}/${data.id}`);
    };

    renderHeaderList() {
        return (
            <>
                <div></div>
                {this.props.defaultColumns.map((column) => {
                    // Hiding the columns passed by props
                    if (this.props.columns_visible[column.value] === true || this.props.all_columns) {
                        return (
                            <div key={column.name}>
                                {column.filter === "order" ? (
                                    <div className="pretty custom p-icon p-toggle p-plain order-col">
                                        <input
                                            type="checkbox"
                                            name={"orderby-" + column.value}
                                            checked={this.props.orderBy.includes(column.value + "_ASC")}
                                            onChange={(e) => {
                                                this.props.columnChangeOrderBy(e, column.value);
                                            }}
                                        />
                                        <div className="state p-on">
                                            <label>
                                                <span>{column.name}</span> <FontAwesomeIcon icon={faAngleUp} />
                                            </label>
                                        </div>
                                        <div className="state p-off">
                                            <label>
                                                <span>{column.name}</span> <FontAwesomeIcon icon={faAngleDown} />
                                            </label>
                                        </div>
                                    </div>
                                ) : (
                                    column.name
                                )}
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
                <FilterColumnsContainer
                    type="hidden-col"
                    columns={this.props.defaultColumns}
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
                            key={node.id}
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
                <div className="text-right mt-1">
                    {this.props.relay.hasMore() ? (
                        <>
                            <button onClick={() => this._loadMore()} className="btn outline btn-load mr-2">
                                {t("paginator.load_more")}
                            </button>

                            <button onClick={() => this._loadMore("all")} className="btn outline">
                                <i className={"fa icon-load" + (this.props.relay.isLoading() ? " fa-spin" : "")}></i>
                                {t("paginator.load_all")}
                            </button>
                        </>
                    ) : this.props.groups.groups.edges.length > ITEMS_PER_PAGE ? (
                        <button onClick={() => this.props.refetch()} className="btn outline btn-load mr-2">
                            {t("paginator.load_less")}
                        </button>
                    ) : null}
                </div>
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
                            id
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
