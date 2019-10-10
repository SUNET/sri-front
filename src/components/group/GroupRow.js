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
            <article onClick={(e) => this.props.onClick(e, group)}>
                {(this.props.columnsVisible["name"] || this.props.showAllColumns) && (
                    <div>
                        {group.name}
                    </div>
                )}
                {(this.props.columnsVisible["description"] || this.props.showAllColumns) && (
                    <div>
                        {group.description}
                    </div>
                )}
                <div></div>
            </article>
        );
    }
}

const GroupRowFragment = createFragmentContainer(GroupRow, {
    group: graphql`
        fragment GroupRow_group on Group {
            handle_id
            name
            description
        }
    `
});

export default GroupRowFragment;
