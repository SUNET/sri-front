import React from "react";
import PropTypes from "prop-types";
import { createPaginationContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Button, Dropdown, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { ITEMS_PER_PAGE } from "../../constants";
import ContactRow from "./ContactRow";
import FieldSwitch from "../FieldSwitch";

import "../../style/ModelList.scss";

class ContactList extends React.PureComponent {
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

    _handleOnClick = (event, data) => {
        this.props.history.push(`${this.props.match.url}/${data.handle_id}`);
    };

    renderList() {
        let models = this.props.contacts;
        return (
            <>
                {models.contacts.edges.map(({ node }) => (
                    <ContactRow key={node.__id} contact={node} onClick={this._handleOnClick} />
                ))}
            </>
        );
    }

    render() {
        const { t } = this.props;
        return (
            <section>
                <div className="model-list">
                    <div>
                        <div></div>
                        <div>{t("Name")}</div>
                        <div>{t("Organization")}</div>
                        <div>{t("Roles")}</div>
                        <div>{t("Contact Type")}</div>
                        <div>
                            <Dropdown alignRight>
                                <Dropdown.Toggle as="span">
                                    <FontAwesomeIcon icon={faBars} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Header>Show/Hide Columns</Dropdown.Header>
                                    <Dropdown.Divider />
                                    <div>
                                        <FieldSwitch
                                            type="toggle-icon"
                                            icon="check"
                                            color="p-success-o"
                                            classNames="off-hidden"
                                            label="Name"
                                            onChange={(e) => {}}
                                            id="network"
                                        />
                                        <FieldSwitch
                                            type="toggle-icon"
                                            icon="check"
                                            color="p-success-o"
                                            classNames="off-hidden"
                                            label="Organization"
                                            onChange={(e) => {}}
                                            id="network"
                                        />
                                        <FieldSwitch
                                            type="toggle-icon"
                                            icon="check"
                                            color="p-success-o"
                                            classNames="off-hidden"
                                            label="Roles"
                                            onChange={(e) => {}}
                                            id="network"
                                        />
                                        <FieldSwitch
                                            type="toggle-icon"
                                            icon="check"
                                            color="p-success-o"
                                            classNames="off-hidden"
                                            label="Contact Type"
                                            onChange={(e) => {}}
                                            id="network"
                                        />
                                        <FieldSwitch
                                            type="toggle-icon"
                                            icon="check"
                                            color="p-success-o"
                                            classNames="off-hidden"
                                            label="All"
                                            onChange={(e) => {}}
                                            id="network"
                                        />
                                    </div>
                                    <Dropdown.Divider />
                                    <div>
                                        <Row>
                                            <Col>
                                                <Button>Cancel</Button>
                                            </Col>
                                            <Col>
                                                <Button>Accept</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div>{this.renderList()}</div>
                </div>
                <Button onClick={() => this._loadMore()} variant="outline-primary">
                    Load More
                </Button>
            </section>
        );
    }
}

export default createPaginationContainer(
    withTranslation()(withRouter(ContactList)),
    graphql`
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
