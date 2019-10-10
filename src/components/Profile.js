import React from "react";
import { Row, Col } from "react-bootstrap";


class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orderBy: "handle_id_DESC"
        };
    }

    render() {
        return (
            <section>
                <Row>
                    <Col sm={4}>
                        <div></div>
                        <hr  />
                        <div></div>
                        <hr  />
                        <div></div>
                    </Col>
                </Row>
            </section>
        );
    }
}

export default Profile;
