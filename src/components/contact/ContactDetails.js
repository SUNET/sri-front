import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { withTranslation } from "react-i18next";

import Contact from "./Contact";
import EditFieldNoRedux from "../EditFieldNoRedux";
import DeleteContactMutation from "../../mutations/DeleteContactMutation";
import UpdateContactMutation from "../../mutations/UpdateContactMutation";
import environment from "../../createRelayEnvironment";
import InfoCreatorModifier from "../InfoCreatorModifier";

const ContactDetailsQuery = graphql`
    query ContactDetailsQuery($contactId: Int!) {
        getContactById(handle_id: $contactId) {
            ...Contact_contact
            name
            contact_type
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
            name: "",
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            contact_type: ""
        };
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        if (this.state.first_name !== nextState.first_name && this.state.last_name !== nextState.last_name) {
            this._handleUpdate(nextState);
        }
    }

    _handleContactChange = (event) => {
        if (event.target.name === "full-name") {
            let fullName = event.target.value;
            fullName = fullName.split(" ");
            this.setState({ first_name: fullName[0], last_name: fullName[1] });
        }
    };

    _handleUpdate = (contact) => {
        const update_contact = {
            id: this.props.match.params.contactId,
            first_name: contact.first_name,
            last_name: contact.last_name,
            email: contact.email,
            phone: contact.phone,
            contact_type: "person"
        };
        UpdateContactMutation(update_contact, environment);
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
                        this.contact = props.getContactById;
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
                                            <EditFieldNoRedux onChange={this._handleContactChange} reduxForm={false}>
                                                <h1>{props.getContactById.name}</h1>
                                            </EditFieldNoRedux>
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
                                            <div className="text-right mt-4">
                                                <button
                                                    type="button"
                                                    onClick={() => this._handleDelete()}
                                                    className="btn link"
                                                >
                                                    {t("actions.delete")}
                                                </button>
                                                <button
                                                    onClick={() => this._handleUpdate(props.getContactById)}
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

export default withTranslation()(ContactDetails);
