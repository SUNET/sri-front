import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import ToggleSection, { ToggleHeading, TogglePanel } from "../components/ToggleSection";
import CreateCommentMutation from "../mutations/CreateCommentMutation";

import "../style/Worklog.scss";

export class Worklog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: ""
        };
    }

    static propTypes = {
        model: PropTypes.object
    };

    handleTogglePanel = (event) => {
        this.props.handleTogglePanel(event);
    };

    handleEditPanel = (event) => {
        this.props.handleEditPanel(event);
    };

    formatDate = (dateString) => {
        let date = new Date(dateString);
        return new Intl.DateTimeFormat().format(date);
    };

    handleCommentChange = (event) => {
        this.setState({ comment: event.target.value });
    };

    createComment = () => {
        CreateCommentMutation(this.props.model.handle_id, this.state.comment);
        this.setState({comment: ""});
        this.props.refetch();
    };

    render() {
        let { t, model } = this.props;
        return (
            <ToggleSection defaultEditable={false}>
                <ToggleHeading>
                    <h2>{t("contact-details.worklog")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    <div className="worklog">
                        <div>
                            {model.comments.map((comment, index) => {
                                return (
                                    <>
                                        <div key={index}>
                                            <header>
                                                <div>
                                                    {comment.user.first_name} {comment.user.last_name}{" "}
                                                    {t("worklog.wrote")}:
                                                </div>
                                                <div>{this.formatDate(comment.submit_date)}</div>
                                            </header>
                                            <div>{comment.comment}</div>
                                        </div>
                                        <hr></hr>
                                    </>
                                );
                            })}
                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control
                                        as="textarea"
                                        rows="3"
                                        placeholder={t("worklog.add-comment")}
                                        onChange={(e) => {
                                            this.handleCommentChange(e);
                                        }}
                                        value={this.state.comment}
                                    />
                                </Form.Group>
                                <div className="actions">
                                    <Button onClick={() => this.createComment()} className="secundary">
                                        {t("actions.send")}
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </TogglePanel>
            </ToggleSection>
        );
    }
}

export default withTranslation()(Worklog);
