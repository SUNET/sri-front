import React from "react";
import PropTypes from "prop-types";
import { createRefetchContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import NumberFormat from "react-number-format";

import Worklog from "../Worklog";
import Dropdown from "../Dropdown";
import ComponentFormRow from "../ComponentFormRow";
import CopyToClipboard from "../CopyToClipboard";
import AppendChild from "../AppendChild";
import ToggleSection, { ToggleHeading, TogglePanel, PanelEditable } from "../../components/ToggleSection";

import "../../style/ModelDetails.scss";

class Contact extends React.PureComponent {
    static propTypes = {
        onChange: PropTypes.func
    };

    refetch = () => {
        this.props.relay.refetch(
            { contactId: this.props.contact.handle_id }, // Our refetchQuery needs to know the `contactID`
            null, // We can use the refetchVariables as renderVariables
            () => {
                console.log("Refetch done");
            },
            { force: true }
        );
    };

    render() {
        let { contact, t } = this.props;
        return (
            <>
                <section className="model-section">
                    <Form.Row>
                        <Col>
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
                            <hr />
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
                                                                                defaultValue={contact.title}
                                                                                onChange={(e) => this.props.onChange(e)}
                                                                            />
                                                                        </Form.Group>
                                                                    )}
                                                                </div>
                                                                <div>
                                                                    {!editable ? (
                                                                        contact.contact_type
                                                                    ) : (
                                                                        <Dropdown
                                                                            className="auto"
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
                                                                            <div>
                                                                                <Form.Group controlId="formGroupEmail">
                                                                                    <Form.Control
                                                                                        className="lg"
                                                                                        placeholder="Email"
                                                                                        name="email"
                                                                                        defaultValue={contact.email}
                                                                                        onChange={(e) =>
                                                                                            this.props.onChange(e)
                                                                                        }
                                                                                    />
                                                                                </Form.Group>
                                                                            </div>
                                                                        </AppendChild>
                                                                    )}
                                                                </div>
                                                                <div>
                                                                    {!editable ? (
                                                                        contact.phone
                                                                    ) : (
                                                                        <AppendChild position="button">
                                                                            <Form.Group controlId="formGroupFirstName">
                                                                                <NumberFormat
                                                                                    value={contact.phone}
                                                                                    displayType={
                                                                                        editable ? "input" : "text"
                                                                                    }
                                                                                    format="+34 ### ### ###"
                                                                                />
                                                                            </Form.Group>
                                                                        </AppendChild>
                                                                    )}
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
                                                                        value={contact.pgp_fingerprint}
                                                                        displayType={editable ? "input" : "text"}
                                                                        format="#### #### #### #### #### #### #### #### #### ####"
                                                                    />
                                                                </Form.Group>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            );
                                        }}
                                    </PanelEditable.Consumer>
                                </TogglePanel>
                            </ToggleSection>
                            <hr />
                            <ToggleSection>
                                <ToggleHeading>
                                    <h2>{t("contact-details.profesional-details")}</h2>
                                </ToggleHeading>
                                <TogglePanel>
                                    <PanelEditable.Consumer>
                                        {(editable) => {
                                            return (
                                                <div className="table-details">
                                                    <div>
                                                        <div>Role</div>
                                                        <div>Organization ID</div>
                                                        <div>Organization</div>
                                                        <div></div>
                                                    </div>
                                                    <div>
                                                        {contact.roles.map((role, index) => {
                                                            return (
                                                                <ComponentFormRow editable={editable} key={role.name}>
                                                                    {(editFields) => {
                                                                        return (
                                                                            <>
                                                                                {!editFields ? (
                                                                                    <>
                                                                                        <div>{role.name}</div>
                                                                                        <div>
                                                                                            {role.end.handle_id}
                                                                                        </div>
                                                                                        <div>{role.end.name}</div>
                                                                                    </>
                                                                                ) : (
                                                                                    <>
                                                                                        <div>
                                                                                            <Form.Group controlId="formGroupEmail">
                                                                                                <Form.Control
                                                                                                    placeholder="Email"
                                                                                                    name="email"
                                                                                                    defaultValue={
                                                                                                        role.name
                                                                                                    }
                                                                                                    onChange={(e) =>
                                                                                                        this.props.onChange(
                                                                                                            e
                                                                                                        )
                                                                                                    }
                                                                                                />
                                                                                            </Form.Group>
                                                                                        </div>
                                                                                        <div>
                                                                                            <Form.Group controlId="formGroupEmail">
                                                                                                <Form.Control
                                                                                                    placeholder="Email"
                                                                                                    name="email"
                                                                                                    defaultValue={
                                                                                                        role.end_node
                                                                                                            .handle_id
                                                                                                    }
                                                                                                    onChange={(e) =>
                                                                                                        this.props.onChange(
                                                                                                            e
                                                                                                        )
                                                                                                    }
                                                                                                />
                                                                                            </Form.Group>
                                                                                        </div>
                                                                                        <div>
                                                                                            <Form.Group controlId="formGroupEmail">
                                                                                                <Form.Control
                                                                                                    placeholder="Email"
                                                                                                    name="email"
                                                                                                    defaultValue={
                                                                                                        role.end_node
                                                                                                            .name
                                                                                                    }
                                                                                                    onChange={(e) =>
                                                                                                        this.props.onChange(
                                                                                                            e
                                                                                                        )
                                                                                                    }
                                                                                                />
                                                                                            </Form.Group>
                                                                                        </div>
                                                                                    </>
                                                                                )}
                                                                            </>
                                                                        );
                                                                    }}
                                                                </ComponentFormRow>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            );
                                        }}
                                    </PanelEditable.Consumer>
                                </TogglePanel>
                            </ToggleSection>
                        </Col>
                    </Form.Row>
                </section>
                <section className="model-section">
                    <Worklog model={contact} refetch={this.refetch} />
                </section>
            </>
        );
    }
}

const ContactFragment = createRefetchContainer(
    withTranslation()(Contact),
    {
        contact: graphql`
            fragment Contact_contact on Contact {
                handle_id
                title
                contact_type
                first_name
                last_name
                email
                phone
                pgp_fingerprint
                roles {
                    name
                    end {
                        handle_id
                        name
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
        query ContactRefetchQuery($contactId: Int!) {
            getContactById(handle_id: $contactId) {
                ...Contact_contact
            }
        }
    `
);

export default ContactFragment;