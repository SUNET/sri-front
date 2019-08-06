import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Button, Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faStar } from "@fortawesome/free-solid-svg-icons";
import { withTranslation } from "react-i18next";

import Contact from "./Contact";
import DeleteContactMutation from "../../mutations/DeleteContactMutation";
import UpdateContactMutation from "../../mutations/UpdateContactMutation";
import environment from "../../createRelayEnvironment";
import InfoCreatorModifier from "../InfoCreatorModifier";

const ContactDetailsQuery = graphql`
    query ContactDetailsQuery($contactId: Int!) {
        getContactById(handle_id: $contactId) {
            ...Contact_contact
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

class ContactDetails extends React.Component {
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
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            contact_type: ""
        };
    }

    _handleContactChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    _handleUpdate = (contact) => {
        const update_contact = {
            id: this.props.match.params.contactId,
            first_name: this.state.first_name || contact.first_name,
            last_name: this.state.last_name || contact.last_name,
            email: this.state.email || contact.email,
            phone: this.state.phone || contact.phone,
            contact_type: this.state.contact_type || contact.contact_type
        };
        UpdateContactMutation(update_contact);
    };

    _handleDelete = () => {
        const contactId = this.props.match.params.contactId;
        DeleteContactMutation(contactId, () => this.props.history.push(`/community/contacts`));
    };

    render() {
        let { t } = this.props;
        return (
            <QueryRenderer
                environment={environment}
                query={ContactDetailsQuery}
                variables={{
                    contactId: this.props.match.params.contactId
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
                                            <Button onClick={() => this.props.history.goBack()} className="outline">
                                                {t("actions.back")}
                                            </Button>
                                            <h1>{props.getContactById.name}</h1>
                                            <FontAwesomeIcon icon={faPen} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </Col>
                                    <Col>
                                        <InfoCreatorModifier model={props.getContactById} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form>
                                            <Contact
                                                onChange={this._handleContactChange}
                                                contact={props.getContactById}
                                            />
                                            <Button
                                                onClick={() => this._handleUpdate(props.getContactById)}
                                                variant="outline-success"
                                            >
                                                {t("actions.update")}
                                            </Button>
                                            <Button onClick={() => this._handleDelete()} variant="outline-danger">
                                                {t("actions.delete")}
                                            </Button>
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

export default withTranslation()(ContactDetails);
