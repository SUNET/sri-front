import React from "react";
import PropTypes from "prop-types";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Row, Col, Image } from "react-bootstrap";

class DashBoardBlockRow extends React.PureComponent {
    static propTypes = {
        contact: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired
    };

    formatDate = (dateString) => {
        let date = new Date(dateString);
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    };

    render() {
        let contact = this.props.contact;
        return (
            <article>
                <Row>
                    <Col className="col-md-auto pr-0 align-self-center">
                        <div>
                            <Image src={require("../img/profile.png")} roundedCircle img-fluid="true" />
                        </div>
                    </Col>
                    <Col className="pr-0 align-self-center">
                        <div>
                            <div>
                                {contact.first_name} {contact.last_name}
                            </div>
                            {contact.roles && (
                                <div className="info">
                                    {contact.roles.map((role) => {
                                        return role.name;
                                    })}
                                </div>
                            )}
                        </div>
                    </Col>
                    <Col className="col-md-auto align-self-center">
                        <div>
                            <div>{this.formatDate(contact.modified)}</div>
                            <div className="info">Last activity</div>
                        </div>
                    </Col>
                </Row>
            </article>
        );
    }
}

const ContactRowFragment = createFragmentContainer(DashBoardBlockRow, {
    contact: graphql`
        fragment DashBoardBlockRow_contact on Contact {
            handle_id
            first_name
            last_name
            modified
            roles {
                name
            }
            member_of_groups {
                name
            }
        }
    `
});

export default ContactRowFragment;
