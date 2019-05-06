import React from "react";
import PropTypes from "prop-types";
import { Container, Jumbotron } from "react-bootstrap";

class ContactDetails extends React.PureComponent {
    static propTypes = {
        contact: PropTypes.string.isRequired
    };

    render() {
        console.log(this.props);
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>{}</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire
                        horizontal space of its parent.
                    </p>
                </Container>
            </Jumbotron>
        );
    }
}

export default ContactDetails;
