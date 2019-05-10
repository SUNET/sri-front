import React from "react";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Form, Col, ButtonToolbar, Button } from "react-bootstrap";

import environment from "../createRelayEnvironment";
import CreateContactMutation from "../mutations/CreateContactMutation";

const CreateContactViewerQuery = graphql`
    query CreateContactViewerQuery {
        viewer {
            id
        }
    }
`;

class CreateContact extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: ""
        };
    }

    _handleContact = (viewerId) => {
        const { firstName, lastName, email, phone } = this.state;
        CreateContactMutation(firstName, lastName, email, phone, viewerId,  () => this.props.history.replace("/contacts"))
    };

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={CreateContactViewerQuery}
                render={({ error, props }) => {
                    if (error) {
                        return <div>{error.message}</div>;
                    } else if (props) {
                        return (
                            <section className="mt-4">
                                <h1>Create Contact</h1>
                                <Form className="mt-3">
                                    <Form.Row>
                                        <Col sm={4}>
                                            <Form.Group controlId="formGroupFirstName">
                                                <Form.Label>
                                                    First Name
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter first name"
                                                    onChange={(e) =>
                                                        this.setState({
                                                            firstName:
                                                                e.target.value
                                                        })
                                                    }
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="formGroupLastName">
                                                <Form.Label>
                                                    Last Name
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter last name"
                                                    onChange={(e) =>
                                                        this.setState({
                                                            lastName:
                                                                e.target.value
                                                        })
                                                    }
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="formGroupEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter email"
                                                    onChange={(e) =>
                                                        this.setState({
                                                            email:
                                                                e.target.value
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
                                                            phone:
                                                                e.target.value
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
                                            onClick={() => this._handleContact(
                                                props.viewer.id
                                            )}
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
                    return <div>Loading</div>;
                }}
            />
        );
    }
}

export default CreateContact;