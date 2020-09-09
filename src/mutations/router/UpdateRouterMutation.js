import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { generatePortForInput } from '../MutationsUtils';

const mutation = graphql`
  mutation UpdateRouterMutation($input: CompositeRouterMutationInput!) {
    composite_router(input: $input) {
      updated {
        errors {
          field
          messages
        }
        router {
          ...RouterUpdateForm_router
        }
      }
    }
  }
`;

export default function UpdateRouterMutation(router, form) {
  const ports = generatePortForInput(router.ports);

  const variables = {
    input: {
      update_input: {
        id: router.id,
        description: router.description,
        operational_state: router.operational_state,
        rack_units: router.rack_units,
        rack_position: router.rack_position,
        rack_back: router.rack_back,
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
      if (response.composite_router.updated.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.update_router.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('Router', response.composite_router.updated.router.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify/changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
