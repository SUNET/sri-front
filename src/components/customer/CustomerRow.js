import React from "react";
import PropTypes from "prop-types";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

class CustomerRow extends React.PureComponent {
    static propTypes = {
        customer: PropTypes.object.isRequired,
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
        let customer = this.props.customer;
        return (
            <tr onClick={(e) => this.props.onClick(e, customer)}>
                {this.renderCellSection("name", customer.name)}
                {this.renderCellSection("url", customer.url)}
                {this.renderCellSection("description", customer.description)}
                {/* td for generate the space for the final cta */}
                <td></td>
            </tr>
        );
    }
}

const CustomerRowFragment = createFragmentContainer(CustomerRow, {
    customer: graphql`
        fragment CustomerRow_customer on Customer {
            id
            name
            description
            url
        }
    `
});

export default CustomerRowFragment;
