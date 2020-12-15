import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import CreateCommentMutation from '../CreateCommentMutation';
import { onCompleteCompositeCreationEntity, generatePortForInput } from '../MutationsUtils';

const mutation = graphql`
  mutation CreateOpticalLinkMutation($input: CompositeOpticalLinkMutationInput!) {
    composite_opticalLink(input: $input) {
      created {
        errors {
          field
          messages
        }
        opticalLink {
          id
          name
          description
          operational_state {
            name
            value
          }
          type: link_type {
            id
            name
            value
          }
          interface_type {
            id
            name
            value
          }
          provider {
            id
            name
          }
          ports {
            id
            name
            __typename
            relation_id
            type: port_type {
              name
            }
          }
        }
      }
    }
  }
`;

function CreateOpticalLinkMutation(opticalLink, form) {
  const ports = generatePortForInput(opticalLink.ports);
  const variables = {
    input: {
      create_input: {
        name: opticalLink.name,
        description: opticalLink.description,
        operational_state: opticalLink.operational_state,
        link_type: opticalLink.type,
        interface_type: opticalLink.interface_type,
        relationship_provider: opticalLink.provider_id,
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
        opticalLink,
        'OpticalLink',
        'composite_opticalLink',
        'optical-links',
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

export default CreateOpticalLinkMutation;
