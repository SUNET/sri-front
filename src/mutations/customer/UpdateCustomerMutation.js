import { commitMutation } from "react-relay";
// import { ConnectionHandler } from "relay-runtime";
import graphql from "babel-plugin-relay/macro";

import i18n from "../../i18n";
import environment from "../../createRelayEnvironment";

const mutation = graphql`
    mutation UpdateCustomerMutation($input: UpdateCustomerInput!) {
        update_customer(input: $input) {
            errors {
                field
                messages
            }
            customer {
                id
                name
                description
                url
            }
        }
    }
`;

export default function UpdateCustomerMutation(customer, form) {
    console.log("customer: ", customer);
    const variables = {
        input: {
            id: customer.id,
            name: customer.name,
            description: customer.description,
            url: customer.url
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log("response: ", response);
            if (response.update_customer.errors) {
                form.props.notify(i18n.t("notify.error"), "error");
                return response.update_customer.updated.errors;
            } else {
                form.props.reset();
                form.refetch();
                form.props.notify(i18n.t("notify.changes-saved"), "success");
            }
        },
        updater: (store) => {},
        onError: (err) => console.error(err)
    });
}
