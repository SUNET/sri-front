import React from "react";
import { Form, Col, ButtonToolbar, Button } from "react-bootstrap";

import Dropdown from "../Dropdown";

import CreateContactMutation from "../../mutations/CreateContactMutation";

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

    _handleContact() {
        const {
            first_name,
            last_name,
            email,
            phone,
            contact_type
        } = this.state;

        CreateContactMutation(first_name, last_name, email, phone, contact_type)
            .then((response) => {
                this.props.history.replace("/community/contacts");
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
        return (
            <section className="mt-4">
                <h1>Create Contact</h1>
                <div>{this.state.errors}</div>
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
                        <Button
                            className="mr-2"
                            variant="outline-primary"
                            onClick={() => this._handleContact()}
                        >
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

export default CreateContact;
