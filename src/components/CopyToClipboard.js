import React, { Component } from "react";
import { withTranslation } from "react-i18next";

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
        console.log(event);

        copy(this.props.copyContent);
        this.showCopied();
    };

    render() {
        const { t } = this.props;
        return (
            <div className="copy-to-clipboard" onClick={(e) => this.copyContent(e)}>
                <Tooltip
                    tooltip={t("actions.copied")}
                    placement="left"
                    trigger="none"
                    delayShow={600}
                    delayHide={200}
                    tooltipShown={this.state.show}
                     onClick={(e) => this.copyContent(e)}
                ></Tooltip>
                <div className="copy-to-clipboard__content">
                    <div className="copy-to-clipboard__content__children">{this.props.children}</div>
                    <div className="copy-to-clipboard__content__icon">
                        <i className="icon-copy">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                        </i>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(CopyToClipboard);
