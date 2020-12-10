import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import CreateCommentMutation from '../CreateCommentMutation';
import { onCompleteCompositeCreationEntity, generatePortForInput } from '../MutationsUtils';

const mutation = graphql`
  mutation CreateOpticalMultiplexSectionMutation($input: CompositeOpticalMultiplexSectionMutationInput!) {
    composite_opticalMultiplexSection(input: $input) {
      created {
        errors {
          field
          messages
        }
        opticalMultiplexSection {
          id
          name
          description
          operational_state {
            name
            value
          }
          provider {
            id
            name
          }
          dependencies {
            id
            name
            __typename
            relation_id
            ... on Port {
              type: port_type {
                name
              }
            }
          }
        }
      }
    }
  }
`;

function CreateOpticalMultiplexSectionMutation(opticalMultiplexSection, form) {
  const ports = generatePortForInput(opticalMultiplexSection.ports);
  const variables = {
    input: {
      create_input: {
        name: opticalMultiplexSection.name,
        description: opticalMultiplexSection.description,
        operational_state: opticalMultiplexSection.operational_state,
        relationship_provider: opticalMultiplexSection.provider_id,
      },
      create_dependencies_port: ports.toCreate,
      update_dependencies_port: ports.toSaved,
      deleted_dependencies_port: ports.toRemove,
      unlink_subinputs: ports.toUnlink,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      onCompleteCompositeCreationEntity(
        form,
        response,
        opticalMultiplexSection,
        'OpticalMultiplexSection',
        'composite_opticalMultiplexSection',
        'optical-multiplex-sections',
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

export default CreateOpticalMultiplexSectionMutation;
