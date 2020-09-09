import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import CreateCommentMutation from '../CreateCommentMutation';
import { onCompleteCompositeCreationEntity, generatePortForInput } from '../MutationsUtils';

const mutation = graphql`
  mutation CreateOpticalNodeMutation($input: CompositeOpticalNodeMutationInput!) {
    composite_opticalNode(input: $input) {
      created {
        errors {
          field
          messages
        }
        opticalNode {
          __typename
          id
          name
          description
          type {
            id
            name
          }
          ports {
            id
            name
          }
          rack_units
          rack_position
          rack_back
          operational_state {
            id
            name
          }
        }
      }
    }
  }
`;

function CreateOpticalNodeMutation(opticalNode, form) {
  const ports = generatePortForInput(opticalNode.ports);
  const variables = {
    input: {
      create_input: {
        name: opticalNode.name,
        description: opticalNode.description,
        rack_back: opticalNode.rack_back,
        rack_units: opticalNode.rack_units,
        rack_position: opticalNode.rack_position,
        operational_state: opticalNode.operational_state,
        type: opticalNode.type,
      },
      update_has_port: ports.toSaved,
      unlink_subinputs: ports.toUnlink,
      deleted_has_port: ports.toRemove,
      create_has_port: ports.toCreate,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      onCompleteCompositeCreationEntity(
        form,
        response,
        opticalNode,
        'OpticalNode',
        'composite_opticalNode',
        'optical-nodes',
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

export default CreateOpticalNodeMutation;
