import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { UNLINK, REMOVE, SAVED, CREATE } from '../../utils/constants';

const mutation = graphql`
  mutation UpdateRouterMutation($input: CompositeRouterMutationInput!) {
    composite_router(input: $input) {
      updated {
        errors {
          field
          messages
        }
        router {
          id
          name
          description
          operational_state {
            id
            name
            value
          }
          model
          version
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

export default function UpdateRouterMutation(router, form) {
  const portsToCreate = router.ports
    ? router.ports.filter((port) => port.status === CREATE).map((e) => ({ name: e.name, port_type: e.type.value }))
    : [];

  const portsToSaved = router.ports
    ? router.ports.filter((port) => port.status === SAVED).map((e) => ({ id: e.id, name: e.name }))
    : [];

  const portsToUnlink = router.ports
    ? router.ports.filter((port) => port.status === UNLINK).map((e) => ({ relation_id: e.relation_id }))
    : [];

  const portsToRemove = router.ports
    ? router.ports.filter((port) => port.status === REMOVE).map((e) => ({ id: e.id }))
    : [];

  const variables = {
    input: {
      update_input: {
        id: router.id,
        description: router.description,
        operational_state: router.operational_state,
      },
      update_has_port: portsToSaved,
      unlink_subinputs: portsToUnlink,
      deleted_has_port: portsToRemove,
      create_has_port: portsToCreate,
    },
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_router.updated.errors) {
        form.props.notify(i18n.t('notify.error'), 'error');
        return response.update_router.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('Router', response.composite_router.updated.router.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify.changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
