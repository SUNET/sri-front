import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import environment from "../../createRelayEnvironment";

import CustomerUpdateFormContainer from "../../containers/customer/CustomerUpdateForm";
import DeleteCustomerMutation from "../../mutations/customer/DeleteCustomerMutation";

import CustomerDetailsQuery from "../../queries/customer/CustomerDetailsQuery";

class CustomerDetails extends React.Component {
    ID_ENTITY_KEY = "customerId";
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.node
            }).isRequired
        }).isRequired
    };

    handleDelete = () => {
        const idEntity = this.props.match.params[this.ID_ENTITY_KEY];
        DeleteCustomerMutation(idEntity, () => this.props.history.push(`/network/customers`));
    };

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={CustomerDetailsQuery}
                variables={{
                    [this.ID_ENTITY_KEY]: this.props.match.params[this.ID_ENTITY_KEY]
                }}
                render={({ error, props, retry }) => {
                    if (error) {
                        return <div>{error.message}</div>;
                    } else if (props) {
                        return (
                            <section className="model-details customer-details">
                                <CustomerUpdateFormContainer
                                    onDelete={this.handleDelete}
                                    customer={props.getCustomerById}
                                    history={this.props.history}
                                    // refetch={retry}
                                />
                            </section>
                        );
                    }
                    return <div>Loading</div>;
                }}
            />
        );
    }
}

export default CustomerDetails;
