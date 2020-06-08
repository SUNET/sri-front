import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import CreateCommentMutation from '../CreateCommentMutation';
import { onCompleteCompositeCreationEntity } from '../MutationsUtils';
import { generateSubInputs } from '../MutationsUtils';

const mutation = graphql`
  mutation CreateCableMutation($input: CompositeCableMutationInput!) {
    composite_cable(input: $input) {
      created {
        errors {
          field
          messages
        }
        cable {
          id
          name
          cable_type {
            value
          }
          description
          ports {
            id
            name
            port_type {
              value
            }
            description
            connected_to {
              id
              name
            }
          }
        }
      }
    }
  }
`;

function CreateCableMutation(cable, form) {
  const connections = generateSubInputs(cable.connections, 'cable_type');
  const variables = {
    input: {
      create_input: {
        name: cable.name,
        description: cable.description,
        cable_type: cable.cable_type,
      },
      // provider: cable.provider_id,
      update_subinputs: connections.toUpdate,
      unlink_subinputs: connections.toUnlink,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      onCompleteCompositeCreationEntity(
        form,
        response,
        cable,
        'Cable',
        'composite_cable',
        'cables',
        CreateCommentMutation,
      );
    },
    onError: (errors) => console.error(errors),
    configs: [
      {
        type: 'RANGE_ADD',
        parentName: ROOT_ID,
        parentID: ROOT_ID,
      },
    ],
  });
}

export default CreateCableMutation;
