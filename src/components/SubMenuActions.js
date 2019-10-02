import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";

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
                            className="btn primary"
                            onClick={() => this.props.history.push(`/community/organizations/create`)}
                        >
                            {t("Add Organizations")}
                        </button>
                    )}
                />
                <Route
                    exact
                    path="/community/contacts/"
                    component={() => (
                        <button
                            className="btn primary"
                            onClick={() => this.props.history.push(`/community/contacts/create`)}
                        >
                            {t("Add Contact")}
                        </button>
                    )}
                />
                <Route
                    exact
                    path="/community/groups/"
                    component={() => (
                        <button
                            className="btn primary"
                            onClick={() => this.props.history.push(`/community/groups/create`)}
                        >
                            {t("Add Group")}
                        </button>
                    )}
                />
            </Switch>
        );
    }
}

export default withRouter(withTranslation()(SubMenuActions));
