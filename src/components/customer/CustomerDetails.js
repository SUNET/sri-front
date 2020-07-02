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
            }),
        }),
    };

    getId() {
        const { isFromModal, idFromModal, match } = this.props;
        const entityId = isFromModal && idFromModal ? idFromModal : match.params[this.ID_ENTITY_KEY];
        return entityId;
    }

    handleDelete = () => {
        const idEntity = this.props.match.params[this.ID_ENTITY_KEY];
        DeleteCustomerMutation(idEntity, () => this.props.history.push(`/network/customers`));
    };

    render() {
        const entityId = this.getId();
        return (
            <QueryRenderer
                environment={environment}
                query={CustomerDetailsQuery}
                variables={{
                    [this.ID_ENTITY_KEY]: entityId
                }}
                render={({ error, props, retry }) => {
                    if (error) {
                        return <div>{this.props.t('general.error')}</div>;
                    } else if (props) {
                        return (
                            <section className="model-details customer-details">
                                <CustomerUpdateFormContainer
                                    isFromModal={this.props.isFromModal}
                                    onDelete={this.handleDelete}
                                    customer={props.getCustomerById}
                                    history={this.props.history}
                                    refetch={retry}
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
