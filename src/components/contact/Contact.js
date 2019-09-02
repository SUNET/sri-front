import React from "react";
import PropTypes from "prop-types";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import NumberFormat from "react-number-format";

import Worklog from "../Worklog";
import Dropdown from "../Dropdown";
import CopyToClipboard from "../CopyToClipboard";
import AppendChild from "../AppendChild";
import ToggleSection, { ToggleHeading, TogglePanel, PanelEditable } from "../../components/ToggleSection";

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
                                    <TogglePanel>
                                        <PanelEditable.Consumer>
                                            {(editable) => {
                                                return <span>test {editable.toString()}</span>;
                                            }}
                                        </PanelEditable.Consumer>
                                    </TogglePanel>
                                </ToggleSection>
                            </article>
                            <hr />
                            <article>
                                <ToggleSection>
                                    <ToggleHeading>
                                        <h2>{t("contact-details.general-information")}</h2>
                                    </ToggleHeading>
                                    <TogglePanel>
                                        <PanelEditable.Consumer>
                                            {(editable) => {
                                                return (
                                                    <>
                                                        <div className="table-details">
                                                            <div>
                                                                <div>Title</div>
                                                                <div>Type</div>
                                                                <div>E-mails</div>
                                                                <div>Phone</div>
                                                            </div>
                                                            <div>
                                                                <div>
                                                                    <div>
                                                                        {!editable ? (
                                                                            contact.title
                                                                        ) : (
                                                                            <Form.Group controlId="formGroupEmail">
                                                                                <Form.Control
                                                                                    placeholder="Email"
                                                                                    name="email"
                                                                                    defaultValue={contact.email}
                                                                                    onChange={(e) =>
                                                                                        this.props.onChange(e)
                                                                                    }
                                                                                />
                                                                            </Form.Group>
                                                                        )}
                                                                    </div>
                                                                    <div>
                                                                        {!editable ? (
                                                                            contact.contact_type
                                                                        ) : (
                                                                            <Dropdown
                                                                                emptyLabel="Select type"
                                                                                type="contact_type"
                                                                                onChange={(e) => this.props.onChange(e)}
                                                                                defaultValue={contact.contact_type}
                                                                            />
                                                                        )}
                                                                    </div>
                                                                    <div>
                                                                        {!editable ? (
                                                                            <CopyToClipboard>
                                                                                {contact.email}
                                                                            </CopyToClipboard>
                                                                        ) : (
                                                                            <AppendChild>
                                                                                <Form.Group controlId="formGroupEmail">
                                                                                    <Form.Control
                                                                                        placeholder="Email"
                                                                                        name="email"
                                                                                        defaultValue={contact.email}
                                                                                        onChange={(e) =>
                                                                                            this.props.onChange(e)
                                                                                        }
                                                                                    />
                                                                                </Form.Group>
                                                                            </AppendChild>
                                                                        )}
                                                                    </div>
                                                                    <div>
                                                                        <NumberFormat
                                                                            value={contact.phone}
                                                                            displayType={editable ? "input" : "text"}
                                                                            format="+34 ### ### ###"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="table-details">
                                                            <div>
                                                                <div>PGP Fingerprint</div>
                                                            </div>
                                                            <div>
                                                                <div>
                                                                    <Form.Group controlId="formGroupFirstName">
                                                                    <NumberFormat
                                                                        className="auto"
                                                                        value={contact.PGP_fingerprint}
                                                                        displayType={editable ? "input" : "text"}
                                                                        format="#### #### #### #### #### #### #### #### #### ####"
                                                                    />
                                                                </Form.Group>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span>test {editable.toString()}</span>
                                                    </>
                                                );
                                            }}
                                        </PanelEditable.Consumer>
                                    </TogglePanel>
                                </ToggleSection>
                            </article>
                            <hr />
                            <article>
                                <ToggleSection>
                                    <ToggleHeading>
                                        <h2>{t("contact-details.profesional-details")}</h2>
                                    </ToggleHeading>
                                    <TogglePanel>
                                        <div className="table-details">
                                            <div>
                                                <div>Role</div>
                                                <div>Organization ID</div>
                                                <div>Organization</div>
                                            </div>
                                            <div>
                                                {contact.roles.map((role, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <div>{role.name}</div>
                                                            <div>{role.end_node.handle_id}</div>
                                                            <div>{role.end_node.name}</div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </TogglePanel>
                                </ToggleSection>
                            </article>
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
                        </Col>
                    </Form.Row>
                </div>
                <div className="model-section">
                    <article>
                        <Worklog model={contact}/>
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
            title
            contact_type
            first_name
            last_name
            email
            phone
            PGP_fingerprint
            roles {
                name
                end_node {
                    handle_id
                    name
                }
            }
            comments {
                user {
                    first_name
                    last_name
                }
                comment
                submit_date
            }
        }
    `
});

export default ContactFragment;
