import React from "react";
import PropTypes from "prop-types";
import { createRefetchContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
// import uuidv4 from "uuid/v4";
// import NumberFormat from "react-number-format";

import Worklog from "../Worklog";
// import Dropdown from "../Dropdown";
// import ComponentFormRow from "../ComponentFormRow";
// import CopyToClipboard from "../CopyToClipboard";
// import AppendChild from "../AppendChild";
import ToggleSection, { ToggleHeading, TogglePanel, PanelEditable } from "../../components/ToggleSection";

import "../../style/ModelDetails.scss";

class Organization extends React.PureComponent {
    static propTypes = {
        onChange: PropTypes.func
    };

    refetch = () => {
        this.props.relay.refetch(
            { organizationId: this.props.organization.handle_id }, // Our refetchQuery needs to know the `organizationID`
            null, // We can use the refetchVariables as renderVariables
            () => {
                console.log("Refetch done");
            },
            { force: true }
        );
    };

    render() {
        let { organization, contacts, t } = this.props;
        return (
            <>
                <section className="model-section">
                    <Form.Row>
                        <Col>
                            <ToggleSection>
                                <ToggleHeading>
                                    <h2>{t("organization-details.description")}</h2>
                                </ToggleHeading>
                                <TogglePanel>
                                    <PanelEditable.Consumer>
                                        {(editable) => {
                                            return <span>{organization.description}</span>;
                                        }}
                                    </PanelEditable.Consumer>
                                </TogglePanel>
                            </ToggleSection>
                        </Col>
                    </Form.Row>
                    <hr />
                    <Form.Row>
                        <Col>
                            <ToggleSection>
                                <ToggleHeading>
                                    <h2>{t("organization-details.contacts")}</h2>
                                </ToggleHeading>
                                <TogglePanel>
                                    <div className="table-details">
                                        <div>
                                            <div>Name</div>
                                            <div>Role</div>
                                            <div>Email</div>
                                            <div>Phone</div>
                                            <div></div>
                                        </div>
                                        <div>
                                            {/* {contacts.edges.map((contact, index) => {
                                                return (
                                                    <div>
                                                        <div>
                                                            {contact.node.first_name} {contact.node.last_name}
                                                        </div>
                                                        <div>
                                                            {contact.node.roles.map((role, index) => {
                                                                return index === 0 ? role.name : null;
                                                            })}
                                                        </div>
                                                        <div>
                                                            {contact.node.emails.map((email, index) => {
                                                                return index === 0 ?  email.name : null;
                                                            })}
                                                        </div>
                                                        <div>
                                                            {contact.node.phones.map((phone, index) => {
                                                                return index === 0 ?  phone.name : null;
                                                            })}
                                                        </div>
                                                        <div></div>
                                                    </div>
                                                );
                                            })} */}
                                        </div>
                                    </div>
                                </TogglePanel>
                            </ToggleSection>
                        </Col>
                    </Form.Row>
                </section>
                <section className="model-section">
                    <Worklog model={organization} refetch={this.refetch} />
                </section>
            </>
        );
    }
}

const OrganizationFragment = createRefetchContainer(
    withTranslation()(Organization),
    {
        organization: graphql`
            fragment Organization_organization on Organization {
                handle_id
                name
                type
                comments {
                    id
                    user {
                        first_name
                        last_name
                    }
                    comment
                    submit_date
                }
            }
        `
    },
    graphql`
        # Refetch query to be fetched upon calling 'refetch'.
        # Notice that we re-use our fragment and the shape of this query matches our fragment spec.
        query OrganizationRefetchQuery($organizationId: Int!) {
            getOrganizationById(handle_id: $organizationId) {
                ...Organization_organization
            }
        }
    `
);

export default OrganizationFragment;
