import React from "react";
import { Form, Col, ButtonToolbar, Button } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import NumberFormat from "react-number-format";

import CreateContactMutation from "../../mutations/CreateContactMutation";

import AppendChild from "../AppendChild";
import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";
import Dropdown from "../Dropdown";

class CreateContact extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            contact_type: "",
            errors: []
        };
    }

    handleFieldChange = (event) => {
        if (event.target.name === "full-name") {
            let fullName = event.target.value;
            fullName = fullName.split(" ");
            this.setState({ first_name: fullName[0], last_name: fullName[1] });
        }
    };

    _handleContact() {
        const { first_name, last_name, email, phone, contact_type } = this.state;

        CreateContactMutation(first_name, last_name, email, phone, contact_type)
            .then((response) => {
                // this.props.history.replace("/community/contacts");
                console.log(response);
            })
            .catch((errors) => {
                this.setState({
                    errors: errors.map((message) => {
                        return message.message;
                    })
                });
            });
    }

    render() {
        const { t } = this.props;
        return (
            <section className="model-details mt-4">
                <h1>Create Contact</h1>
                <div>{this.state.errors}</div>
                <Form.Row className="model-section">
                    <Col>
                        <ToggleSection defaultEditable={false}>
                            <ToggleHeading>
                                <h2>{t("contact-details.notes")}</h2>
                            </ToggleHeading>
                            <TogglePanel>
                                <Form.Control
                                    as="textarea"
                                    rows="3"
                                    placeholder={t("contact-details.add-notes")}
                                    onChange={(e) => {
                                        this.handleFieldChange(e);
                                    }}
                                    value={this.state.comment}
                                />
                            </TogglePanel>
                        </ToggleSection>
                        <hr />
                    </Col>
                </Form.Row>
                <Form.Row className="model-section">
                    <Col>
                        <ToggleSection>
                            <ToggleHeading>
                                <h2>{t("contact-details.general-information")}</h2>
                            </ToggleHeading>
                            <TogglePanel>
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
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Control
                                                        placeholder="Email"
                                                        name="email"
                                                        onChange={(e) => this.props.handleFieldChange(e)}
                                                    />
                                                </Form.Group>
                                            </div>
                                            <div>
                                                <Dropdown
                                                    className="auto"
                                                    emptyLabel="Select type"
                                                    type="contact_type"
                                                    onChange={(e) => this.props.handleFieldChange(e)}
                                                />
                                            </div>
                                            <div>
                                                <AppendChild>
                                                    <div>
                                                        <Form.Group controlId="formGroupEmail">
                                                            <Form.Control
                                                                className="lg"
                                                                placeholder="Email"
                                                                name="email"
                                                                onChange={(e) => this.handleFieldChange(e)}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </AppendChild>
                                                )}
                                            </div>
                                            <div>
                                                <AppendChild position="button">
                                                    <Form.Group controlId="formGroupFirstName">
                                                        <NumberFormat displayType={"input"} format="+34 ### ### ###" />
                                                    </Form.Group>
                                                </AppendChild>
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
                                                    displayType={"input"}
                                                    format="#### #### #### #### #### #### #### #### #### ####"
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                            </TogglePanel>
                        </ToggleSection>
                        <hr />
                    </Col>
                </Form.Row>
                <Form className="mt-3">
                    <Form.Row>
                        <Col sm={4}>
                            <Form.Group controlId="formGroupFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter first name"
                                    onChange={(e) =>
                                        this.setState({
                                            first_name: e.target.value
                                        })
                                    }
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter last name"
                                    onChange={(e) =>
                                        this.setState({
                                            last_name: e.target.value
                                        })
                                    }
                                />
                            </Form.Group>
                            <Dropdown
                                label="Contact Type"
                                type="contact_type"
                                onChange={(e) =>
                                    this.setState({
                                        contact_type: e.target.value
                                    })
                                }
                            />
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    onChange={(e) =>
                                        this.setState({
                                            email: e.target.value
                                        })
                                    }
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="phone"
                                    placeholder="Enter phone"
                                    onChange={(e) =>
                                        this.setState({
                                            phone: e.target.value
                                        })
                                    }
                                />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <ButtonToolbar>
                        <Button className="mr-2" variant="outline-primary" onClick={() => this._handleContact()}>
                            Create
                        </Button>
                        <Button
                            onClick={() => {
                                this.props.history.goBack();
                            }}
                            variant="outline-danger"
                        >
                            Cancel
                        </Button>
                    </ButtonToolbar>
                </Form>
            </section>
        );
    }
}

export default withTranslation()(CreateContact);
