import React from "react";
import { withTranslation } from "react-i18next";
import graphql from "babel-plugin-relay/macro";
import environment from "../../createRelayEnvironment";
import { QueryRenderer } from "react-relay";

import DashBoardContactList from "./DashBoardContactList";

const DashBoardContactBlockQuery = graphql`
    query DashBoardContactBlockQuery($count: Int!, $orderBy: ContactOrderBy) {
        ...DashBoardContactList_contacts @arguments(count: $count, orderBy: $orderBy)
    }
`;

class DashBoardContactBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orderBy: "modified_DESC",
            count: 6
        };
    }

    handleChangeOrderBy = (event, type) => {
        let orderBy = "";
        if (type === "contacts") {
            if (event.target.checked) {
                orderBy = "modified_ASC";
            } else {
                orderBy = "modified_DESC";
            }
            this.setState({ orderBy: orderBy });
        }
    };

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={DashBoardContactBlockQuery}
                variables={{
                    count: this.state.count,
                    orderBy: this.state.orderBy
                }}
                render={({ error, props, retry }) => {
                    if (error) {
                        return <div>{this.props.t('general.error')}</div>;
                    } else if (props) {
                        return (
                            <DashBoardContactList
                                title={this.props.title}
                                contacts={props}
                                refetch={retry}
                                changeOrderBy={this.handleChangeOrderBy}
                                orderBy={this.state.orderBy}
                                footer={this.props.footer}
                            />
                        );
                    }
                    return <div>Loading</div>;
                }}
            />
        );
    }
}

export default withTranslation()(DashBoardContactBlock);
