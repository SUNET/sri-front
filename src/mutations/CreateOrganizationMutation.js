import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

import CreateContactInlineMutation from "./CreateContactInlineMutation";
import AddContactOrganizationMutation from "./AddContactOrganizationMutation";
import CreateComentMutation from "./CreateCommentMutation";
import CreateAddressMutation from "./CreateAddressMutation";

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
    name,
    description,
    type,
    incident_management_info,
    comment,
    contacts,
    address,
    callback
) {
    const variables = {
        input: {
            name,
            description,
            type,
            incident_management_info,
            clientMutationId: tempID++
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log(response, environment);
            const organization_id = response.create_organization.organization.handle_id;
            CreateComentMutation(organization_id, comment);
            CreateAddressMutation(organization_id, address);

            Object.keys(contacts).forEach(contact_key => {
                let contact = contacts[contact_key];
                if(!contact.id || contact.id === undefined){
                    let fullName = contact.name;
                    fullName = fullName.split(" ");
                    contact.first_name = fullName[0];
                    contact.last_name = fullName[1];

                    CreateContactInlineMutation(
                        contact.first_name,
                        contact.last_name,
                        contact.email,
                        contact.phone,
                        organization_id,
                        contact.role
                    );
                }else{
                    AddContactOrganizationMutation(contact, organization_id);
                }
            });

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
