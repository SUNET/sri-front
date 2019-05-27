import React from "react";
import { withTranslation } from "react-i18next";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import "../style/TopHeader.scss";

function TopHeader({ t, i18n }) {
    return (
        <header>
            <Navbar>
                <Navbar.Brand as={Link} to="/">
                    {t("header.welcome")}
                </Navbar.Brand>
                <Navbar className="ml-auto">
                    <Navbar.Brand>
                        <FontAwesomeIcon icon={faBell} />
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </Navbar.Brand>
                </Navbar>
            </Navbar>
        </header>
    );
}

export default withTranslation()(TopHeader);
