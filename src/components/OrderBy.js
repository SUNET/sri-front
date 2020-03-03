import React from "react";
import { withTranslation } from "react-i18next";

import FieldSwitch from "./FieldSwitch";

import "../style/OrderBy.scss";

class OrderBy extends React.Component {
    _handleOnChangeOrderBy = (event) => {
        if (event.target.checked) {
            this.props.changeOrderBy("handle_id_ASC");
        } else {
            this.props.changeOrderBy("handle_id_DESC");
        }
    };

    render() {
        const t = this.props.t;
        return (
            <div className="order-by outline">
                <FieldSwitch
                    type="toggle-icon"
                    icon="angle"
                    classNames="icon-right"
                    labelChecked={t("filter.newest-first")}
                    labelUnChecked={t("filter.latest-first")}
                    handleChecked={(e) => this._handleOnChangeOrderBy(e)}
                    id="orderBy"
                />
            </div>
        );
    }
}

export default withTranslation()(OrderBy);
