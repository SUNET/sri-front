import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

import Tooltip from "./Tooltip";
import copy from "clipboard-copy";

import "../style/CopyToClipboard.scss";

class CopyToClipboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
    }

    copyContent = (event) => {
        copy(event.target.innerText);
        this.setState({
            show: true
        });
        setTimeout(() => {
            this.setState({show: false})
        }, 2000);
    };

    render() {
        const { t } = this.props;
        return (
            <div className="copy-to-clipboard" onClick={(e) => this.copyContent(e)}>
                <Tooltip
                    tooltip={t("actions.copied")}
                    placement="right"
                    trigger="none"
                    delayShow={600}
                    delayHide={200}
                    tooltipShown={this.state.show}
                >
                    <FontAwesomeIcon icon={faCopy} />
                    <span>{this.props.children}</span>
                </Tooltip>
            </div>
        );
    }
}

export default withTranslation()(CopyToClipboard);
