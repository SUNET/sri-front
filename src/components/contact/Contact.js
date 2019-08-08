import React from "react";
import PropTypes from "prop-types";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import Dropdown from "../Dropdown";
import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";

import "../../style/ModelDetails.scss";

class Contact extends React.PureComponent {
    static propTypes = {
        onChange: PropTypes.func
    };

    render() {
        let { contact, t } = this.props;
        return (
            <>
                <div className="model-section">
                    <Form.Row>
                        <Col>
                            <article>
                                <ToggleSection>
                                    <ToggleHeading>
                                        <h2>{t("contact-details.notes")}</h2>
                                    </ToggleHeading>

                                </ToggleSection>
                                <header>

                                </header>
                                <div></div>
                            </article>
                            <article>
                                <header>
                                    <h2>{t("contact-details.general-information")}</h2>
                                </header>
                                <div></div>
                            </article>
                            <article>
                                <header>
                                    <h2>{t("contact-details.profesional-details")}</h2>
                                </header>
                                <div></div>
                            </article>
                            <Form.Group controlId="formGroupId">
                                <Form.Control
                                    placeholder="ID"
                                    name="handle_id"
                                    defaultValue={contact.handle_id}
                                    readOnly
                                />
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
                <div className="model-section">
                    <article>
                        <header>
                            <h2>{t("contact-details.worklog")}</h2>
                        </header>
                        <div></div>
                    </article>
                </div>
            </>
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
