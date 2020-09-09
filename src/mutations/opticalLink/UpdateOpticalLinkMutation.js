import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { generatePortForInput } from '../MutationsUtils';

const mutation = graphql`
  mutation UpdateOpticalLinkMutation($input: CompositeOpticalLinkMutationInput!) {
    composite_opticalLink(input: $input) {
      updated {
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

export default function UpdateOpticalLinkMutation(opticalLink, form) {
  const ports = generatePortForInput(opticalLink.ports);
  const variables = {
    input: {
      update_input: {
        id: opticalLink.id,
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
      if (response.composite_opticalLink.updated.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.update_opticalLink.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('OpticalLink', response.composite_opticalLink.updated.opticalLink.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify/changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
