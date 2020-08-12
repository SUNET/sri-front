import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';
import { onCompleteCompositeCreationEntity } from '../MutationsUtils';

const mutation = graphql`
  mutation CreateOpticalNodeMutation($input: CompositeOpticalNodeMutationInput!) {
    composite_opticalNode(input: $input) {
      created {
        errors {
          field
          messages
        }
        opticalNode {
          id
          name
          description
        }
      }
    }
  }
`;

function CreateOpticalNodeMutation(opticalNode, form) {
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
        'opticalNodes',
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
