import React from "react";
import PropTypes from "prop-types";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import "../../style/ModelRow.scss";

class GroupRow extends React.PureComponent {
    static propTypes = {
        group: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired
    };

    formatDate = (dateString) => {
        let date = new Date(dateString);
        return date.toISOString("YYYY-MM-DD");
    };

    render() {
        let group = this.props.group;
        return (
            <tr onClick={(e) => this.props.onClick(e, group)}>
                {(this.props.columnsVisible["name"] || this.props.showAllColumns) && <td>{group.name}</td>}
                {(this.props.columnsVisible["description"] || this.props.showAllColumns) && (
                    <td>{group.description}</td>
                )}
                {/* td for generate the space for the final cta */}
                <td></td>
            </tr>
        );
    }
}

const GroupRowFragment = createFragmentContainer(GroupRow, {
    group: graphql`
        fragment GroupRow_group on Group {
            id
            name
            description
        }
    `
});

export default GroupRowFragment;
