import React from "react";
import PropTypes from "prop-types";
import Relay from "react-relay";
import graphql from "babel-plugin-relay/macro";

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
    };

    _handleOnClick = (event, data) => {
        this.props.history.push(`${this.props.match.url}/${data.handle_id}`);
    };

    renderList() {
        let contacts = this.props.models.contacts;
        return (
            <div>
                {contacts.edges.map(({ node }) => (
                    <DashBoardBlockRow key={node.__id} contact={node} onClick={this._handleOnClick} />
                ))}
            </div>
        );
    }

    render() {
        return <section>{this.renderList()}</section>;
    }
}

function createFragment(fragmentSpec) {
    return (Component) => Relay.createFragmentContainer(Component, fragmentSpec);
}

const withFragmentContainer = createFragment(queryContacts);

export default withFragmentContainer(DashBoardBlockList);
