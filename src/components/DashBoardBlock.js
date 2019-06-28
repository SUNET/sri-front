import React from "react";
import QueryLookupRenderer from "relay-query-lookup-renderer";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

import environment from "../createRelayEnvironment";

import DashBoardBlockList from "./DashBoardBlockList";
import OrderBy from "./OrderBy";

import "../style/DashBoardBlock.scss";

class DashBoardBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orderBy: "handle_id_DESC"
        };
    }

    _handleOnChangeOrderBy = (orderBy) => {
        this.setState({ orderBy: orderBy });
    };

    render() {
        return (
            <div className="dashboard-block">
                <header>
                    <h2>{this.props.title}</h2>
                    <OrderBy changeOrderBy={this._handleOnChangeOrderBy} />
                </header>
                <article>
                    <QueryLookupRenderer
                        lookup={true}
                        environment={environment}
                        query={this.props.query}
                        variables={{
                            count: this.props.length,
                            orderBy: this.state.orderBy
                        }}
                        render={({ error, props }) => {
                            if (error) {
                                return <div>{error.message}</div>;
                            } else if (props) {
                                return <DashBoardBlockList models={props} />;
                            }
                            return <div>Loading</div>;
                        }}
                    />
                </article>
                {this.props.footer && (
                    <footer>
                        <NavLink to={this.props.footer.link}>{this.props.footer.label}</NavLink>
                    </footer>
                )}
            </div>
        );
    }
}

export default withRouter(DashBoardBlock);
