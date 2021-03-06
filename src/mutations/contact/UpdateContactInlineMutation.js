import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';

const mutation = graphql`
  mutation UpdateContactInlineMutation($input: UpdateContactInput!) {
    update_contact(input: $input) {
      errors {
        field
        messages
      }
      contact {
        id
        first_name
        last_name
        contact_type {
          name
          value
        }
        emails {
          id
          name
          type {
            name
            value
          }
        }
        phones {
          id
          name
          type {
            name
            value
          }
        }
        roles {
          relation_id
          role_data {
            id
            name
          }
          end {
            id
            name
            organization_id
          }
        }
        member_of_groups {
          name
        }
      }
    }
  }
`;

let tempID = 0;

function UpdateContactInlineMutation(contact, organization_id, group_id, role_id) {
  const variables = {
    input: {
      id: contact.id,
      first_name: contact.first_name,
      last_name: contact.last_name,
      contact_type: contact.contact_type.toLowerCase(),
      relationship_works_for: organization_id ? organization_id : '',
      relationship_member_of: group_id ? group_id : '',
      role: role_id ? role_id : '',
      clientMutationId: tempID++,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log(response, errors);
    },
    onError: (errors) => console.error(errors),
    configs: [
      {
        type: 'RANGE_ADD',
        parentName: ROOT_ID,
        parentID: ROOT_ID,
        connectionInfo: [
          {
            key: 'ContactList_contacts',
            rangeBehavior: 'append',
          },
        ],
        edgeName: 'contactEdge',
      },
    ],
  });
}

export default UpdateContactInlineMutation;
