import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { isBrowser } from "react-device-detect";

class SubMenuActions extends React.Component {
    ROUTE_LIST = [
        {
            path: "/community/organizations/",
            pathTo: "/community/organizations/create",
            textButton: "organization-details.add-organization"
        },
        {
            path: "/community/contacts/",
            pathTo: "/community/contacts/create",
            textButton: "contact-details.add-contact"
        },
        {
            path: "/community/groups/",
            pathTo: "/community/groups/create",
            textButton: "group-details.add-group"
        },
        {
            path: "/network/customers/",
            pathTo: "/network/customers/create",
            textButton: "network.details.add/customers"
        },
        {
            path: "/network/providers/",
            pathTo: "/network/providers/create",
            textButton: "network.details.add/providers"
        }
    ];
    render() {
        const { t } = this.props;
        return (
            <Switch>
                {this.ROUTE_LIST.map((routeData, index) => {
                    return (
                        <Route
                            key={`sub-action${index}`}
                            exact
                            path={routeData.path}
                            component={() => (
                                <button
                                    className="btn primary add-cta reduced-in-mobile"
                                    onClick={() => this.props.history.push(routeData.pathTo)}
                                >
                                    {isBrowser ? t(routeData.textButton) : "+"}
                                </button>
                            )}
                        />
                    );
                })}
            </Switch>
        );
    }
}

export default withRouter(withTranslation()(SubMenuActions));
