import React from "react";
import { createPaginationContainer } from "react-relay";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import graphql from "babel-plugin-relay/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import DashBoardContactRow from "./DashBoardContactRow";

import "../../style/DashBoardBlock.scss";

class DashBoardContactList extends React.Component {
    handleLinkToContact = (event, data) => {
        // Redirection to contact detail
        this.props.history.push(`/community/contacts/${data.id}`);
    };

    render() {
        const { contacts } = this.props.contacts;
        return (
            <div className="dashboard-block">
                <header>
                    <h2>{this.props.title}</h2>
                    <div className="pretty custom p-icon p-toggle p-plain icon-right order-by">
                        <input
                            type="checkbox"
                            name="contacts-orderby"
                            checked={this.props.orderBy.includes("_ASC")}
                            onChange={(e) => {
                                this.props.changeOrderBy(e, "contacts");
                            }}
                        />
                        <div className="state p-on">
                            <label>
                                <span>Recent last</span> <FontAwesomeIcon icon={faAngleUp} />
                            </label>
                        </div>
                        <div className="state p-off">
                            <label>
                                <span>Recent first</span> <FontAwesomeIcon icon={faAngleDown} />
                            </label>
                        </div>
                    </div>
                </header>
                <div>
                    {contacts.edges.map(({ node, index }) => {
                        return (
                            <DashBoardContactRow key={node.__id} contact={node} onClick={this.handleLinkToContact} />
                        );
                    })}
                </div>
                {this.props.footer && (
                    <div>
                        <button
                            type="button"
                            onClick={() => this.props.history.push(this.props.footer.link)}
                            className="btn outline"
                        >
                            <span>{this.props.footer.label}</span>
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

export default createPaginationContainer(
    withTranslation()(withRouter(DashBoardContactList)),
    {
        contacts: graphql`
            fragment DashBoardContactList_contacts on Query
                @argumentDefinitions(
                    count: { type: "Int" }
                    cursor: { type: "String" }
                    orderBy: { type: ContactOrderBy }
                ) {
                contacts(first: $count, after: $cursor, orderBy: $orderBy)
                    @connection(key: "DashBoardContactList_contacts", filters: []) {
                    edges {
                        node {
                            ...DashBoardContactRow_contact
                        }
                    }
                    pageInfo {
                        endCursor
                        hasNextPage
                        hasPreviousPage
                        startCursor
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
            query DashBoardContactListForwardQuery($count: Int!, $cursor: String, $orderBy: ContactOrderBy) {
                ...DashBoardContactList_contacts @arguments(count: $count, cursor: $cursor, orderBy: $orderBy)
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
