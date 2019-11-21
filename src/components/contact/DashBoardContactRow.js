import React from "react";
import PropTypes from "prop-types";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Row, Col, Image } from "react-bootstrap";
import moment from "moment";

class DashBoardContactRow extends React.PureComponent {
    static propTypes = {
        contact: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired
    };

    formatDate = (dateString) => {
        let date = new Date(dateString);
        return moment(date)
            .locale("en")
            .fromNow();
    };

    render() {
        const { contact } = this.props;
        return (
            <article onClick={(e) => this.props.onClick(e, contact)}>
                <Row>
                    <Col className="col-auto">
                        <div>
                            <Image src={require("../../static/img/profile.png")} roundedCircle img-fluid="true" />
                        </div>
                    </Col>
                    <Col className="px-0">
                        <div>
                            <div>
                                {contact.first_name} {contact.last_name}
                            </div>
                            {contact.roles && (
                                <div className="help-text">
                                    {contact.roles.map((role, index) => {
                                        return (
                                            <span key={index}>
                                                {role.end && (
                                                    <>
                                                        {role.end.name}
                                                        {contact.roles[index + 1] ? ", " : ""}
                                                    </>
                                                )}
                                            </span>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </Col>
                    <Col className="col-md-auto">
                        <div>
                            <div>{this.formatDate(contact.modified)}</div>
                        </div>
                    </Col>
                </Row>
            </article>
        );
    }
}

const ContactRowFragment = createFragmentContainer(DashBoardContactRow, {
    contact: graphql`
        fragment DashBoardContactRow_contact on Contact {
            handle_id
            first_name
            last_name
            modified
            roles {
                name
                end {
                    name
                }
            }
            member_of_groups {
                name
            }
        }
    `
});

export default ContactRowFragment;
