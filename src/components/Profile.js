import React from "react";
import { withTranslation } from "react-i18next";

import { Field, reduxForm } from "redux-form";
import { ListGroup, Form, Row, Col, Image } from "react-bootstrap";

import FieldInput from "./FieldInput";
import Dropdown from "./Dropdown";

import "../style/Profile.scss";

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            default_page: ""
        };
    }

    componentDidMount() {
        this.props.initialize();
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log(this.props);
        if (this.props.dirty !== nextProps.dirty) {
            console.log("enter");
            this.props.dispatch({ type: "UPDATE_PROFILE", payload: { ...this.props } });
            this.props.reset();
        }
    }

    _handleChangePage = (event) => {
        this.setState({ default_page: event.target.value });
    };

    render() {
        const { t, handleSubmit } = this.props;
        return (
            <section className="profile">
                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <div className="title-section">
                                <button
                                    type="button"
                                    onClick={() => this.props.history.goBack()}
                                    className="btn btn-back outline"
                                >
                                    <span>{t("actions.back")}</span>
                                </button>
                                <h1>{t("profile-settings.title")}</h1>
                            </div>
                        </Col>
                    </Row>
                    <section>
                        <Row>
                            <Col sm={3}>
                                <div className="profile-section text-center">
                                    <div>
                                        <h2>{t("profile-settings.profile-picture")}</h2>
                                        <div className="profile-picture">
                                            <Image
                                                src={require("../static/img/profile.png")}
                                                roundedCircle
                                                img-fluid="true"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <h2>{t("profile-settings.personal-info")}</h2>
                                        <Form.Group>
                                            <Field
                                                type="text"
                                                component={FieldInput}
                                                placeholder="Write name"
                                                name="name"
                                                className="lg"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <Field
                                                type="text"
                                                component={FieldInput}
                                                placeholder="Write email"
                                                name="email"
                                                className="lg"
                                            />
                                        </Form.Group>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="profile-section">
                                    <h2>{t("Default home page")}</h2>
                                    <Dropdown
                                        className="auto"
                                        emptyLabel="Type"
                                        type="email_type"
                                        name="main_pages"
                                        onChange={(e) => {}}
                                    />
                                    <hr />
                                    <h2>{t("profile-settings.visualization-options")}</h2>
                                    <ListGroup className="borderless">
                                        <ListGroup.Item>
                                            <div className="pretty custom p-switch">
                                                <Field component="input" type="checkbox" name="network" />
                                                <div className="state p-primary">
                                                    <label>{t("settings.network")}</label>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="pretty custom p-switch">
                                                <Field component="input" type="checkbox" name="services" />
                                                <div className="state p-primary">
                                                    <label>{t("settings.services")}</label>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="pretty custom p-switch">
                                                <Field component="input" type="checkbox" name="community" />
                                                <div className="state p-primary">
                                                    <label>{t("settings.community")}</label>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                    <hr />
                                    <h2>{t("profile-settings.notification-panel")}</h2>
                                    <ListGroup className="borderless">
                                        <ListGroup.Item>
                                            <div className="pretty custom p-switch">
                                                <Field component="input" type="checkbox" name="notifications" />
                                                <div className="state p-primary">
                                                    <label>{t("settings.notifications")}</label>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="pretty custom p-switch">
                                                <Field component="input" type="checkbox" name="emails-notification" />
                                                <div className="state p-primary">
                                                    <label>{t("settings.emails")}</label>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </Col>
                        </Row>
                    </section>
                </form>
            </section>
        );
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = "* Required!";
    }
    if (!values.email) {
        errors.email = "* Required!";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "* Invalid email!";
    }

    return errors;
};

ProfileForm = reduxForm({
    form: "profile",
    validate
})(ProfileForm);

export default withTranslation()(ProfileForm);
