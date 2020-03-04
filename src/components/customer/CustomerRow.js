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

    render() {
        let customer = this.props.customer;
        return (
            <tr onClick={(e) => this.props.onClick(e, customer)}>
                {(this.props.columnsVisible["name"] || this.props.showAllColumns) && <td>{customer.name}</td>}
                {(this.props.columnsVisible["description"] || this.props.showAllColumns) && (
                    <td>{customer.description}</td>
                )}
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
        }
    `
});

export default CustomerRowFragment;
