import React from "react";
import { Accordion } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

import "../style/SideNav.scss";

class SideNavHeaderItem extends React.Component {
    render() {
        return (
            <Accordion.Toggle
                as={NavLink}
                eventKey="0"
                to={this.props.to}
            >
                <div className="nav-header">
                    <div>
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </div>
                    <div>{this.props.label}</div>
                    <div></div>
                </div>
            </Accordion.Toggle>
        );
    }
}

export default withRouter(SideNavHeaderItem);
