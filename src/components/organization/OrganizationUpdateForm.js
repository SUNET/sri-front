import React from "react";
import PropTypes from "prop-types";
import { createRefetchContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import InfoCreatorModifier from "../InfoCreatorModifier";
import EditField from "../EditField";
// import uuidv4 from "uuid/v4";
// import NumberFormat from "react-number-format";

import Worklog from "../Worklog";
// import Dropdown from "../Dropdown";
// import ComponentFormRow from "../ComponentFormRow";
// import CopyToClipboard from "../CopyToClipboard";
// import AppendChild from "../AppendChild";
import ToggleSection, { ToggleHeading, TogglePanel, PanelEditable } from "../../components/ToggleSection";

import "../../style/ModelDetails.scss";

class OrganizationUpdateForm extends React.Component {
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
        let { organization, t, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Form.Row>
                    <Col>
                        <div className="title-section">
                            <button
                                type="button"
                                onClick={() => this.props.history.goBack()}
                                className="btn btn-back outline"
                            >
                                <span>{t("actions.back")}</span>
                            </button>
                            <EditField onChange={this._handleOrganizationChange}>{/*}<h1>{name}</h1>*/}</EditField>
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                    </Col>
                    <Col>
                        <InfoCreatorModifier model={organization} />
                    </Col>
                </Form.Row>
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
                                    <h2>{t("organization-details.address")}</h2>
                                </ToggleHeading>
                                <TogglePanel>
                                    <div className="table-details">
                                        <div>
                                            <div>Website</div>
                                            <div>Street</div>
                                            <div>Postal Code</div>
                                            <div>Postal Area</div>
                                            <div>Phone</div>
                                        </div>
                                        <div>
                                            {organization.addresses.map((address, index) => {
                                                return (
                                                    <div>
                                                        <div>{address.website}</div>
                                                        <div>{address.street}</div>
                                                        <div>{address.postal_code}</div>
                                                        <div>{address.postal_area}</div>
                                                        <div>{address.phone}</div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
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
                                            {/* {organization.incoming.relation.start.map((contact, index) => {
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
                    <Form.Row>
                        <Col>
                            <ToggleSection>
                                <ToggleHeading>
                                    <h2>{t("organization-details.additional-info")}</h2>
                                </ToggleHeading>
                                <TogglePanel>
                                    <PanelEditable.Consumer>
                                        {(editable) => {
                                            return <span>{organization.incident_management_info}</span>;
                                        }}
                                    </PanelEditable.Consumer>
                                </TogglePanel>
                            </ToggleSection>
                        </Col>
                    </Form.Row>
                </section>
                <section className="model-section">
                    <Worklog model={organization} refetch={this.refetch} />
                </section>
                <div className="text-right mt-4">
                    <button type="button" onClick={() => this._handleDelete()} className="btn link">
                        {t("actions.delete")}
                    </button>
                    <button onClick={() => {}} className="btn primary lg">
                        {t("actions.save")}
                    </button>
                </div>
            </form>
        );
    }
}

const OrganizationUpdateFormFragment = createRefetchContainer(
    withTranslation()(OrganizationUpdateForm),
    {
        organization: graphql`
            fragment OrganizationUpdateForm_organization on Organization {
                handle_id
                name
                type
                incident_management_info
                addresses {
                    handle_id
                    website
                    street
                    postal_code
                    postal_area
                    phone
                }
                incoming {
                    name
                    relation {
                        relation_id
                        type
                        end {
                            handle_id
                            node_name
                        }
                        start {
                            handle_id
                            node_name
                        }
                    }
                }
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
        query OrganizationUpdateFormRefetchQuery($organizationId: Int!) {
            getOrganizationById(handle_id: $organizationId) {
                ...OrganizationUpdateForm_organization
            }
        }
    `
);

export default OrganizationUpdateFormFragment;
