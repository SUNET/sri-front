import React from "react";
import { withTranslation } from "react-i18next";
import { ButtonToolbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../style/SubMenu.scss";

class SubMenuActions extends React.Component {
    render() {
        const t = this.props.t;
        return (
            <ButtonToolbar>
                <Button
                    as={Link}
                    to={`${this.props.match.url}/create`}
                    variant="outline-primary"
                >
                    {t("+ New Contact")}
                </Button>
            </ButtonToolbar>
        );
    }
}

export default withTranslation()(SubMenuActions);
