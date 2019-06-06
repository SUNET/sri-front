import React from "react";
import { Row, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import Dropdown from "./Dropdown";

class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            default_page: ""
        };
    }

    _handleChangePage = (event) => {
        this.setState({ default_page: event.target.value });
    };

    _handleSaveDefaultHomePage = (event) => {
        console.log(this.state.default_page);
    };

    render() {
        const t = this.props.t;
        return (
            <section className="mt-3">
                <Row>
                    <Col sm={4}>
                        <Row>
                            <Col sm={8}>
                                <Dropdown
                                    type="main_pages"
                                    onChange={(e) => this._handleChangePage(e)}
                                />
                            </Col>
                            <Col>
                                <button onClick={(e) => this._handleSaveDefaultHomePage(e)}>{t("Default home page")}</button>
                            </Col>
                        </Row>
                        <hr />
                        <div />
                        <hr />
                        <div />
                    </Col>
                </Row>
            </section>
        );
    }
}

export default withTranslation()(Settings);
