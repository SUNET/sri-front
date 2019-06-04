import React from "react";
import { withTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import "../style/Filter.scss";

class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orderBy: "handle_id_ASC"
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state == null) return true;

        if (this.props === nextProps) {
            return false;
        }
        return true;
    };

    _handleOnChangeOrderBy = (event) => {
        if (this.state.orderBy === "handle_id_DESC") {
            this.setState({ orderBy: "handle_id_ASC" });
        } else {
            this.setState({ orderBy: "handle_id_DESC" });
        }
        this.props.changeOrderBy(this.state.orderBy);
    };

    renderType() {
        const t = this.props.t;
        switch (this.state.orderBy) {
            case "handle_id_DESC":
                return (
                    <>
                        <span>{t("Newest first")}</span>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </>
                );
            case "handle_id_ASC":
                return (
                    <>
                        <span>{t("Latest first")}</span>
                        <FontAwesomeIcon icon={faAngleUp} />
                    </>
                );
            default:
                return null;
        }
    }

    render() {
        return (
            <section className="pullRight">
                <button onClick={(e) => this._handleOnChangeOrderBy(e)}>
                    {this.renderType()}
                </button>
            </section>
        );
    }
}

export default withTranslation()(Filter);
