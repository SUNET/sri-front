import React from "react";
import PropTypes from "prop-types";
import Relay from "react-relay";
import graphql from "babel-plugin-relay/macro";
// import { graphql } from "react-relay";

import DashBoardBlockRow from "./DashBoardBlockRow";

const queryContacts = graphql`
    fragment DashBoardBlockList_models on Query
        @argumentDefinitions(
            count: { type: "Int" }
            cursor: { type: "String" }
            orderBy: { type: ContactOrderBy }
        ) {
        contacts(first: $count, after: $cursor, orderBy: $orderBy)
            @connection(key: "DashBoardBlockList_contacts", filters: []) {
            edges {
                node {
                    ...DashBoardBlockRow_contact
                }
            }
        }
    }
`;

class DashBoardBlockList extends React.PureComponent {
    static propTypes = {
        models: PropTypes.object.isRequired,
        model: PropTypes.string.isRequired
    };

    _handleOnClick = (event, data) => {
        this.props.history.push(`${this.props.match.url}/${data.handle_id}`);
    };

    renderList() {
        let contacts = this.props.models.contacts;
        return (
            <div>
                {contacts.edges.map(({ node }) => (
                    <DashBoardBlockRow Key={node.__id} contact={node} onClick={this._handleOnClick} />
                ))}
            </div>
        );
    }

    render() {
        return <section>{this.renderList()}</section>;
    }

    get_model = () => {
        console.log(this.props);
        return this.props.model;
    }
}

let query = undefined;

switch (DashBoardBlockList.get_model) {
    case "contact":
    console.log("type contact");
        query = queryContacts;
        break;
    default:
        console.log(DashBoardBlockList);
        query = queryContacts;
        break;
}

function createFragment(fragmentSpec) {
    return (Component) => Relay.createFragmentContainer(Component, fragmentSpec);
}

const withFragmentContainer = createFragment(query);

export default withFragmentContainer(DashBoardBlockList);
