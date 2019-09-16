import React from "react";
import { Form, Row, Col, ButtonToolbar, Button } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import NumberFormat from "react-number-format";

import CreateContactMutation from "../../mutations/CreateContactMutation";

import AppendChild from "../AppendChild";
import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";
import Dropdown from "../Dropdown";
import EditField from "../EditField";
import ComponentFormRow from "../ComponentFormRow";

class CreateContact extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            name: "New Contact",
            first_name: "New",
            last_name: "Contact",
            notes: "",
            email: "",
            phone: "",
            contact_type: "",
            comment: "",
            roles: {},
            organizations: {},
            errors: []
        };
    }

    componentDidMount() {}

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
        console.log(this.state);
        return (
            <>
                <div className="model-details">
                    <section className="title-section">
                        <EditField onChange={this.handleFieldChange}>
                            <h1 className="ml-0">
                                {this.state.first_name} {this.state.last_name}
                            </h1>
                        </EditField>
                    </section>
                    <section className="model-section">
                        <Form.Row>
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
                                                this.setState({ notes: e.target.value });
                                            }}
                                            value={this.state.notes}
                                        />
                                    </TogglePanel>
                                </ToggleSection>
                            </Col>
                        </Form.Row>
                        <hr />
                        <Form.Row>
                            <Col>
                                <ToggleSection defaultEditable={false}>
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
                                                        <Form.Group controlId="formGroupTitle">
                                                            <Form.Control
                                                                placeholder="Type title"
                                                                name="title"
                                                                onChange={(e) =>
                                                                    this.setState({ title: e.target.value })
                                                                }
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                    <div>
                                                        <Dropdown
                                                            className="auto"
                                                            emptyLabel="Type"
                                                            type="contact_type"
                                                            onChange={(e) =>
                                                                this.setState({ contact_type: e.target.value })
                                                            }
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
                                                                        onChange={(e) =>
                                                                            this.setState({
                                                                                email: e.target.value
                                                                            })
                                                                        }
                                                                    />
                                                                </Form.Group>
                                                            </div>
                                                        </AppendChild>
                                                    </div>
                                                    <div>
                                                        <AppendChild position="button">
                                                            <Form.Group controlId="formGroupPhone">
                                                                <NumberFormat
                                                                    placeholder="Phone"
                                                                    displayType="input"
                                                                    format="+34 ### ### ###"
                                                                    onChange={(e) =>
                                                                        this.setState({
                                                                            phone: e.target.value
                                                                        })
                                                                    }
                                                                />
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
                                                            displayType="input"
                                                            format="#### #### #### #### #### #### #### #### #### ####"
                                                        />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                        </div>
                                    </TogglePanel>
                                </ToggleSection>
                            </Col>
                        </Form.Row>
                        <hr />
                        <Form.Row>
                            <Col>
                                <ToggleSection defaultEditable={false}>
                                    <ToggleHeading>
                                        <h2>{t("contact-details.profesional-details")}</h2>
                                    </ToggleHeading>
                                    <TogglePanel>
                                        <div className="table-details">
                                            <div>
                                                <div>Role</div>
                                                <div>Organization ID</div>
                                                <div>Organization</div>
                                                <div></div>
                                            </div>
                                            <div>
                                                <ComponentFormRow editable={true}>
                                                    {(editFields) => {
                                                        return (
                                                            <>
                                                                <div>
                                                                    <Dropdown
                                                                        className="auto"
                                                                        emptyLabel="Select role"
                                                                        model="roles"
                                                                        onChange={(e) =>
                                                                            this.setState({
                                                                                roles: {
                                                                                    handle_id: e.target.value
                                                                                }
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <Form.Group controlId="formGroupEmail">
                                                                        <Form.Control
                                                                            placeholder="Type ID"
                                                                            name="organization-id"
                                                                            defaultValue={
                                                                                this.state.organizations.handle_id
                                                                            }
                                                                        />
                                                                    </Form.Group>
                                                                </div>
                                                                <div>
                                                                    <Dropdown
                                                                        className="auto"
                                                                        emptyLabel="Select organization"
                                                                        model="organization"
                                                                        onChange={(e) =>
                                                                            this.setState({
                                                                                organizations: {
                                                                                    handle_id: e.target.value
                                                                                }
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </>
                                                        );
                                                    }}
                                                </ComponentFormRow>
                                            </div>
                                        </div>
                                    </TogglePanel>
                                </ToggleSection>
                            </Col>
                        </Form.Row>
                    </section>
                    <section className="model-section">
                        <ToggleSection defaultEditable={false}>
                            <ToggleHeading>
                                <h2>{t("contact-details.worklog")}</h2>
                            </ToggleHeading>
                            <TogglePanel>
                                <Form.Group controlId="textarea">
                                    <Form.Control
                                        as="textarea"
                                        rows="3"
                                        placeholder={t("worklog.add-comment")}
                                        onChange={(e) => {
                                            this.setState({ comment: e.target.value });
                                        }}
                                        value={this.state.comment}
                                    />
                                </Form.Group>
                            </TogglePanel>
                        </ToggleSection>
                    </section>
                </div>
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
            </>
        );
    }
}

export default withTranslation()(CreateContact);
