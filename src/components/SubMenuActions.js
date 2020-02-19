import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { isBrowser } from "react-device-detect";

class SubMenuActions extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <Switch>
                <Route
                    exact
                    path="/community/organizations/"
                    component={() => (
                        <button
                            className="btn primary add-cta reduced-in-mobile"
                            onClick={() => this.props.history.push(`/community/organizations/create`)}
                        >
                            {isBrowser ? t("organization-details.add-organization") : "+"}
                        </button>
                    )}
                />
                <Route
                    exact
                    path="/community/contacts/"
                    component={() => (
                        <button
                            className="btn primary add-cta reduced-in-mobile"
                            onClick={() => this.props.history.push(`/community/contacts/create`)}
                        >
                            {isBrowser ? t("contact-details.add-contact") : "+"}
                        </button>
                    )}
                />
                <Route
                    exact
                    path="/community/groups/"
                    component={() => (
                        <button
                            className="btn primary add-cta reduced-in-mobile"
                            onClick={() => this.props.history.push(`/community/groups/create`)}
                        >
                            {isBrowser ? t("group-details.add-group") : "+"}
                        </button>
                    )}
                />
            </Switch>
        );
    }
}

export default withRouter(withTranslation()(SubMenuActions));
