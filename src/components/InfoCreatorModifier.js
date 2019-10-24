import React from "react";
import { withTranslation } from "react-i18next";

import "../style/InfoCreatorModifier.scss";

class InfoCreatorModifier extends React.Component {
    formatDate = (dateString) => {
        let date = new Date(dateString);
        return new Intl.DateTimeFormat().format(date);
    };

    render() {
        const { t } = this.props;
        return (
            <div className="info-creator-modifier">
                <div>
                    <div>
                        {t("info.created")}: {this.formatDate(this.props.model.created)}
                    </div>
                    <div>{this.props.model.creator.email}</div>
                </div>
                <div>
                    <div>
                        {t("info.last_update")}: {this.formatDate(this.props.model.modified)}
                    </div>
                    <div>
                        <div>{this.props.model.modifier.email}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(InfoCreatorModifier);
