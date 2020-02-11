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
        if (this.state.comment) {
            CreateCommentMutation(this.props.model.id, this.state.comment);
            this.setState({ comment: "" });
            this.props.refetch();
        }
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
                            <div className="worklog__messages">
                                {model &&
                                    model.comments &&
                                    model.comments.map((comment, index) => {
                                        return (
                                            <div key={comment.id} className="worklog__messages__item">
                                                <div className="worklog__messages__item__body">
                                                    <div className="worklog__messages__item__body__content">
                                                        <header className="worklog__messages__item__body__content__header">
                                                            {comment.user.first_name} {comment.user.last_name}{" "}
                                                            {t("worklog.wrote")}:
                                                        </header>
                                                        <div className="worklog__messages__item__body__content__comment pre-text">
                                                            {comment.comment}
                                                        </div>
                                                    </div>
                                                    <div className="worklog__messages__item__body__date">
                                                        {this.formatDate(comment.submit_date)}
                                                    </div>
                                                </div>
                                                <div className="worklog__messages__item__separator">
                                                    <hr />
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                            <Form.Group controlId="textarea">
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
                                <Button type="button" onClick={() => this.createComment()} className="secondary md">
                                    {t("worklog.send")}
                                </Button>
                            </div>
                        </div>
                    </div>
                </TogglePanel>
            </ToggleSection>
        );
    }
}

export default withTranslation()(Worklog);
