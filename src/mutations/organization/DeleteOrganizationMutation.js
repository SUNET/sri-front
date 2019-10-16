import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { ROOT_ID } from "relay-runtime";
import environment from "../../createRelayEnvironment";

const mutation = graphql`
    mutation DeleteOrganizationMutation($input: DeleteOrganizationInput!) {
        delete_organization(input: $input) {
            success
        }
    }
`;

export default function DeleteOrganizationMutation(handle_id, callback) {
    const variables = {
        input: {
            handle_id: handle_id,
            clientMutationId: ""
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onError: (err) => console.error(err),
        onCompleted: (response) => {
            console.log(response, environment);
            callback();
        },
        configs: [
            {
                type: "RANGE_DELETE",
                parentName: ROOT_ID,
                parentID: ROOT_ID,
                connectionKeys: [
                    {
                        key: "OrganizationList_organizations",
                        rangeBehavior: "append"
                    }
                ],
                pathToConnection: ["client:root", "contacts"],
                deletedIDFieldName: "handle_id"
            }
        ]
    });
}
