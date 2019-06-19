import React from "react";
import { withTranslation } from "react-i18next";

import FieldSwitch from "./FieldSwitch";

import "../style/Filter.scss";

class Filter extends React.Component {

    componentWillUnmount(next_props, next_state) {
        return false;
    }

    _handleOnChangeOrderBy = (checked) => {
        if (checked) {
            this.props.changeOrderBy("handle_id_ASC");
        } else {
            this.props.changeOrderBy("handle_id_DESC");
        }
    };

    render() {
        const t = this.props.t;
        return (
            <section className="text-right">
                <FieldSwitch
                    type="toggle-icon"
                    icon="angle"
                    labelChecked={t("Latest first")}
                    labelUnChecked={t("Newest first")}
                    onChange={(e) => this._handleOnChangeOrderBy(e)}
                    id="orderBy"
                />
            </section>
        );
    }
}

export default withTranslation()(Filter);
