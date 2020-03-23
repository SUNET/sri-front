import React from "react";
import PropTypes from "prop-types";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

class PortRow extends React.PureComponent {
    static propTypes = {
        port: PropTypes.object.isRequired,
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
        let port = this.props.port;
        return (
            <tr onClick={(e) => this.props.onClick(e, port)}>
                {this.renderCellSection("name", port.name)}
                {this.renderCellSection("description", port.description)}
                {/* td for generate the space for the final cta */}
                <td></td>
            </tr>
        );
    }
}

const PortRowFragment = createFragmentContainer(PortRow, {
    port: graphql`
        fragment PortRow_port on Port {
            id
            name
            description
        }
    `
});

export default PortRowFragment;
