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

    showCopied = () => {
        this.setState({
            show: true
        });
        setTimeout(() => {
            this.setState({ show: false });
        }, 2000);
    };

    copyContent = (event) => {
        copy(event.target.innerText);
        this.showCopied();
    };

    copyContentToIcon = (event) => {
        copy(event.target.parentElement.nextSibling.innerText);
        this.showCopied();
    };

    render() {
        const { t } = this.props;
        return (
            <div className="copy-to-clipboard">
                <Tooltip
                    tooltip={t("actions.copied")}
                    placement="right"
                    trigger="none"
                    delayShow={600}
                    delayHide={200}
                    tooltipShown={this.state.show}
                >
                    <FontAwesomeIcon icon={faCopy} onClick={(e) => this.copyContentToIcon(e)} />
                    <span className="element-to-copy" onClick={(e) => this.copyContent(e)}>
                        {this.props.children}
                    </span>
                </Tooltip>
            </div>
        );
    }
}

export default withTranslation()(CopyToClipboard);
