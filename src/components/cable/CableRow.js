import React from "react";
import PropTypes from "prop-types";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

class CableRow extends React.PureComponent {
    static propTypes = {
        cable: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired
    };

    formatDate = (dateString) => {
        let date = new Date(dateString);
        return date.toISOString("YYYY-MM-DD");
    };

    renderCellSection(sectionName, text) {
        return (
            (this.props.columnsVisible[sectionName] || this.props.showAllColumns) && (
                <td className="text-truncate" style={{ maxWidth: 0 }}>
                    <span title={text} className="d-inline-block text-truncate" style={{ width: "100%" }}>
                        {text}
                    </span>
                </td>
            )
        );
    }

    render() {
        let cable = this.props.cable;
        return (
            <tr /*onClick={(e) => this.props.onClick(e, cable)}*/>
                {this.renderCellSection("name", cable.name)}
                {this.renderCellSection("cable_type", cable.cable_type)}
                {this.renderCellSection("description", cable.description)}
                {/* td for generate the space for the final cta */}
                <td></td>
            </tr>
        );
    }
}

const CableRowFragment = createFragmentContainer(CableRow, {
    cable: graphql`
        fragment CableRow_cable on Cable {
            id
            name
            description
            cable_type
        }
    `
});

export default CableRowFragment;
