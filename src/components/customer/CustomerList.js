// TODO: ORDER IMPORTS
import React from "react";
import PropTypes from "prop-types";
import { createPaginationContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import { ITEMS_PER_PAGE, ALL_ITEMS } from "../../config";
import FilterColumns from "../FilterColumns";

import { isBrowser, isMobile } from "react-device-detect";
import { Table } from "react-bootstrap";

import CustomerRow from "./CustomerRow";

const MODEL_NAME = "customer";

export class CustomerList extends React.PureComponent {
    // static propTypes = {
    //     customers: PropTypes.object.isRequired
    // };

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
        this.props.history.push(`${this.props.match.url}/${data.id}`);
    };

    renderFiltersColumns() {
        return (
            <div className="model-list__header-cta">
                <FilterColumns
                    type="hidden-col"
                    columns={this.props.defaultColumns}
                    model={MODEL_NAME}
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
                <tr></tr>
            </thead>
        );
    }

    renderList() {
        let models = this.props.customers;
        return <tbody></tbody>;
    }

    render() {
        const { t } = this.props;
        return <></>;
    }
}

export default createPaginationContainer(
    withTranslation()(withRouter(CustomerList)),
    {
        customers: graphql`
            fragment CustomerList_customers on Query
                @argumentDefinitions(
                    count: { type: "Int" }
                    cursor: { type: "String" }
                    filter: { type: CustomerFilter }
                    orderBy: { type: CustomerOrderBy }
                ) {
                customers(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
                    @connection(key: "CustomerList_customers", filters: []) {
                    edges {
                        node {
                            id
                            ...CustomerRow_customer
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
            query CustomerListForwardQuery($count: Int!, $cursor: String, $orderBy: CustomerOrderBy) {
                ...CustomerList_customers @arguments(count: $count, cursor: $cursor, orderBy: $orderBy)
            }
        `,
        getConnectionFromProps(props) {
            return props.customers && props.customers.customers;
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
