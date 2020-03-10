import React from "react";
import PropTypes from "prop-types";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

class SiteOwnerRow extends React.PureComponent {
    static propTypes = {
        siteOwner: PropTypes.object.isRequired,
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
        let siteOwner = this.props.siteOwner;
        return (
            <tr onClick={(e) => this.props.onClick(e, siteOwner)}>
                {this.renderCellSection("name", siteOwner.name)}
                {this.renderCellSection("url", siteOwner.url)}
                {this.renderCellSection("description", siteOwner.description)}
                {/* td for generate the space for the final cta */}
                <td></td>
            </tr>
        );
    }
}

const SiteOwnerRowFragment = createFragmentContainer(SiteOwnerRow, {
    siteOwner: graphql`
        fragment SiteOwnerRow_siteOwner on SiteOwner {
            id
            name
            description
            url
        }
    `
});

export default SiteOwnerRowFragment;
