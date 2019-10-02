import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { withTranslation } from "react-i18next";

import Organization from "./Organization";
import EditField from "../EditField";
import UpdateOrganizationMutation from "../../mutations/UpdateOrganizationMutation";
import DeleteOrganizationMutation from "../../mutations/DeleteOrganizationMutation";
import environment from "../../createRelayEnvironment";
import InfoCreatorModifier from "../InfoCreatorModifier";

const OrganizationDetailsQuery = graphql`
    query OrganizationDetailsQuery($organizationId: Int!) {
        getOrganizationById(handle_id: $organizationId) {
            ...Organization_organization
            name
            created
            creator {
                email
            }
            modified
            modifier {
                email
            }
        }
    }
`;

class OrganizationDetails extends React.Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.node
            }).isRequired
        }).isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: ""
        };
    }

    _handleOrganizationChange = (event) => {
        this.setState({ name: event.target.value });
    };

    _handleUpdate = (organization) => {
        const update_organization = {
            id: this.props.match.params.organizationId,
            name: organization.name,
            description: organization.description
        };
        UpdateOrganizationMutation(update_organization);
    };

    _handleDelete = () => {
        const organizationId = this.props.match.params.organizationId;
        DeleteOrganizationMutation(organizationId, () => this.props.history.push(`/community/organizations`));
    };

    render() {
        let { t } = this.props;
        return (
            <QueryRenderer
                environment={environment}
                query={OrganizationDetailsQuery}
                variables={{
                    organizationId: this.props.match.params.organizationId
                }}
                render={({ error, props }) => {
                    if (error) {
                        return <div>{error.message}</div>;
                    } else if (props) {
                        return (
                            <section className="model-details">
                                <Row>
                                    <Col>
                                        <div className="title-section">
                                            <button
                                                onClick={() => this.props.history.goBack()}
                                                className="btn btn-back outline"
                                            >
                                                <span>{t("actions.back")}</span>
                                            </button>
                                            <EditField onChange={this._handleOrganizationChange}>
                                                <h1>{props.getOrganizationById.name}</h1>
                                            </EditField>
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </Col>
                                    <Col>
                                        <InfoCreatorModifier model={props.getOrganizationById} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form>
                                            <Organization
                                                onChange={this._handleOrganizationChange}
                                                organization={props.getOrganizationById}
                                                members={props.contacts}
                                            />
                                            <div className="text-right mt-4">
                                                <button
                                                    type="button"
                                                    onClick={() => this._handleDelete()}
                                                    className="btn link"
                                                >
                                                    {t("actions.delete")}
                                                </button>
                                                <button
                                                    onClick={() => this._handleUpdate(props.getOrganizationById)}
                                                    className="btn primary lg"
                                                >
                                                    {t("actions.save")}
                                                </button>
                                            </div>
                                        </Form>
                                    </Col>
                                </Row>
                            </section>
                        );
                    }
                    return <div>Loading</div>;
                }}
            />
        );
    }
}

export default withTranslation()(OrganizationDetails);
