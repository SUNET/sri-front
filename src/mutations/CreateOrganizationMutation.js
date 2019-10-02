import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

import CreateComentMutation from "./CreateCommentMutation";

const mutation = graphql`
    mutation CreateOrganizationMutation($input: CreateOrganizationInput!) {
        create_organization(input: $input) {
            errors {
                field
                messages
            }
            organization {
                handle_id
                name
                type
            }
        }
    }
`;

let tempID = 0;

function CreateOrganizationMutation(
    handle_id,
    name,
    type,
    comment,
    contacts,
    callback
) {
    const variables = {
        input: {
            handle_id,
            name,
            type,
            comment,
            clientMutationId: tempID++
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log(errors);
            console.log(response, environment);
            const organization_id = response.create_organization.organization.handle_id;
            CreateComentMutation(organization_id, comment);

            callback().push("/community/organizations/" + organization_id);
        },
        onError: (errors) => console.error(errors),
        configs: [
            {
                type: "RANGE_ADD",
                parentName: ROOT_ID,
                parentID: ROOT_ID,
                connectionInfo: [
                    {
                        key: "OrganizationList_organizations",
                        rangeBehavior: "append"
                    }
                ],
                edgeName: "organizationEdge"
            }
        ]
    });
}

export default CreateOrganizationMutation;
