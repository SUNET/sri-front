import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';
import { onCompleteCompositeCreationEntity } from '../MutationsUtils';

const mutation = graphql`
  mutation CreateExternalEquipmentMutation($input: CompositeExternalEquipmentMutationInput!) {
    composite_externalEquipment(input: $input) {
      created {
        errors {
          field
          messages
        }
        externalEquipment {
          id
          name
          description
        }
      }
    }
  }
`;

function CreateExternalEquipmentMutation(externalEquipment, form) {
  const variables = {
    input: {
      create_input: {
        name: externalEquipment.name,
        description: externalEquipment.description,
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
        externalEquipment,
        'ExternalEquipment',
        'composite_externalEquipment',
        'externalEquipments',
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

export default CreateExternalEquipmentMutation;
