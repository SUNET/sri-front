// TODO: ORDER IMPORTS
import React from "react";
import PropTypes from "prop-types";
import { createPaginationContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import CONFIG from "../../config";
import FilterColumns from "../FilterColumns";

import { isBrowser, isMobile } from "react-device-detect";
import { Table } from "react-bootstrap";

import { default as ROW_COMPONENT } from "./CableRow";

const { ITEMS_PER_PAGE, ALL_ITEMS } = CONFIG;

export class CableList extends React.Component {
    MODEL_NAME = "cable";
    MODEL_LIST_NAME = "cables";
    ROW_COMPONENT = ROW_COMPONENT;
    static propTypes = {
        cables: PropTypes.object
    };

    shouldComponentUpdate(nextProps, nextState) {
        const haveNewElements = nextProps[this.MODEL_LIST_NAME] !== null;
        return haveNewElements;
    }

    _loadMore = (type) => {
        let itemsPerLoad = ITEMS_PER_PAGE;
        if (type === "all") {
            itemsPerLoad = ALL_ITEMS;
        }
        if (!this.props.relay.hasMore()) {
            return;
        } else if (this.props.relay.isLoading()) {
            return;
        }

        this.props.changeCount(itemsPerLoad);
        this.props.relay.loadMore(itemsPerLoad, () => {
            this.forceUpdate(); // this fixed updated props because relay doesn't do it.
        });
    };

    handleFilterColumns = () => {};

    _handleOnClick = (event, data) => {
        this.props.history.push(`${this.props.match.url}/${data.id}`);
    };

    renderFiltersColumns() {
        return (
            <div className="model-list__header-cta">
                <FilterColumns
                    type="hidden-col"
                    columns={this.props.defaultColumns}
                    model={this.MODEL_NAME}
                    filterColumns={this.handleFilterColumns}
                />
            </div>
        );
    }

    renderShowFiltersLateralPanel() {
        return (
            <div className="model-list__header-cta" onClick={this.props.clickInMobileShowMenu}>
                <i className="icon-filter"></i>
            </div>
        );
    }

    renderHeaderList() {
        return (
            <thead>
                <tr>
                    {this.props.defaultColumns.map((column) => {
                        // Hiding the columns passed by props
                        if (this.props.columns_visible[column.value] === true || this.props.all_columns) {
                            return (
                                <th key={column.name}>
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
                                </th>
                            );
                        } else {
                            return null;
                        }
                    })}
                    {isMobile && <th className="p-1">{this.renderShowFiltersLateralPanel()}</th>}
                    {isBrowser && <th className="">{this.renderFiltersColumns()}</th>}
                </tr>
            </thead>
        );
    }

    renderList() {
        let models = this.props[this.MODEL_LIST_NAME];

        return (
            <tbody>
                {models && models[this.MODEL_LIST_NAME] && models[this.MODEL_LIST_NAME].edges.map(({ node }) => {
                    return (
                        <this.ROW_COMPONENT
                            key={node.id}
                            cable={node}
                            onClick={this._handleOnClick}
                            columnsVisible={this.props.columns_visible}
                            showAllColumns={this.props.all_columns}
                        />
                    );
                })}
            </tbody>
        );
    }

    render() {
        const { t } = this.props;
        const models = this.props[this.MODEL_LIST_NAME];

        return (
            <>
                <Table responsive={isMobile} className="model-list" borderless>
                    {this.renderHeaderList()}
                    {this.renderList()}
                </Table>
                {models && <div className="text-right mt-1">
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
                    ) : this.props[this.MODEL_LIST_NAME][this.MODEL_LIST_NAME].edges.length > ITEMS_PER_PAGE ? (
                        <button onClick={() => this.props.refetch()} className="btn outline btn-load mr-2">
                            {t("paginator.load_less")}
                        </button>
                    ) : null}
                </div>}
            </>
        );
    }
}

export default createPaginationContainer(
    withTranslation()(withRouter(CableList)),
    {
        cables: graphql`
            fragment CableList_cables on Query
                @argumentDefinitions(
                    count: { type: "Int" }
                    cursor: { type: "String" }
                    filter: { type: CableFilter }
                    orderBy: { type: CableOrderBy }
                ) {
                cables(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
                    @connection(key: "CableList_cables", filters: []) {
                    edges {
                        node {
                            id
                            ...CableRow_cable
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
            query CableListForwardQuery($count: Int!, $cursor: String, $orderBy: CableOrderBy) {
                ...CableList_cables @arguments(count: $count, cursor: $cursor, orderBy: $orderBy)
            }
        `,
        getConnectionFromProps(props) {
            return props.cables && props.cables.cables;
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
