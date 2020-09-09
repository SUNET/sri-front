import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { generatePortForInput } from '../MutationsUtils';

const mutation = graphql`
  mutation UpdateOpticalNodeMutation($input: CompositeOpticalNodeMutationInput!) {
    composite_opticalNode(input: $input) {
      updated {
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
            value
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
          rack_units
          rack_position
          rack_back
          operational_state {
            id
            name
            value
          }
        }
      }
    }
  }
`;

export default function UpdateOpticalNodeMutation(opticalNode, form) {
  const ports = generatePortForInput(opticalNode.ports);

  const variables = {
    input: {
      update_input: {
        id: opticalNode.id,
        name: opticalNode.name,
        description: opticalNode.description,
        operational_state: opticalNode.operational_state,
        rack_back: opticalNode.rack_back,
        rack_units: opticalNode.rack_units,
        rack_position: opticalNode.rack_position,
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
      if (response.composite_opticalNode.updated.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.composite_opticalNode.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('OpticalNode', response.composite_opticalNode.updated.opticalNode.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify/changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
