import React from "react";
import PropTypes from "prop-types";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Form, Row, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import Dropdown from "../Dropdown";

import "../../style/ModelDetails.scss";

class Contact extends React.PureComponent {
    static propTypes = {
        onChange: PropTypes.func
    };

    renderFullName() {
        return this.props.contact.first_name + " " + this.props.contact.last_name;
    }

    render() {
        let contact = this.props.contact;
        let {t} = this.props;
        return (
            <div className="model-details">
                <h1 className="mt-3 mb-3">{this.renderFullName()}</h1>
                <Form.Row>
                    <Col>
                        <h2>{t("contact-details.notes")}</h2>
                        <h2>{t("contact-details.general-information")}</h2>
                        <h2>{t("contact-details.profesional-details")}</h2>
                        <h2>{t("contact-details.worklog")}</h2>
                        <Form.Group controlId="formGroupId">
                            <Form.Control placeholder="ID" name="handle_id" defaultValue={contact.handle_id} readOnly />
                        </Form.Group>
                        <Dropdown
                            label="Contact Type"
                            emptyLabel="Select type"
                            type="contact_type"
                            onChange={(e) => this.props.onChange(e)}
                            defaultValue={contact.contact_type}
                        />
                        <Form.Group controlId="formGroupFirstName">
                            <Form.Control
                                placeholder="First name"
                                name="first_name"
                                defaultValue={contact.first_name}
                                onChange={(e) => this.props.onChange(e)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupLastName">
                            <Form.Control
                                placeholder="Last name"
                                name="last_name"
                                defaultValue={contact.last_name}
                                onChange={(e) => this.props.onChange(e)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Control
                                placeholder="Email"
                                name="email"
                                defaultValue={contact.email}
                                onChange={(e) => this.props.onChange(e)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupPhone">
                            <Form.Control
                                placeholder="Phone"
                                name="phone"
                                defaultValue={contact.phone}
                                onChange={(e) => this.props.onChange(e)}
                            />
                        </Form.Group>
                    </Col>
                </Form.Row>
            </div>
        );
    }
}

const ContactFragment = createFragmentContainer(withTranslation()(Contact), {
    contact: graphql`
        fragment Contact_contact on Contact {
            handle_id
            contact_type
            first_name
            last_name
            email
            phone
        }
    `
});

export default ContactFragment;
