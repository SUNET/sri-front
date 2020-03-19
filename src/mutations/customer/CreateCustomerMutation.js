import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";
import i18n from "../../i18n";

const mutation = graphql`
    mutation CreateCustomerMutation($input: CreateCustomerInput!) {
        create_customer(input: $input) {
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

let tempID = 0;

function CreateCustomerMutation(customer, form) {
    const variables = {
        input: {
            name: customer.name,
            description: customer.description,
            url: customer.url
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            if (response.create_customer.errors) {
                form.props.notify(i18n.t("notify.error"), "error");
                return response.create_customer.updated.errors;
            } else {
                form.props.reset();
                form.refetch();
                form.props.notify(i18n.t("notify.changes-saved"), "success");
            }
        },
        onError: (errors) => console.error(errors),
        configs: [
            {
                type: "RANGE_ADD",
                parentName: ROOT_ID,
                parentID: ROOT_ID
            }
        ]
    });
}

export default CreateCustomerMutation;
