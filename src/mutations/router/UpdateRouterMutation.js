import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { generatePortForInput, formatDependenciesToUpdate } from '../MutationsUtils';

import { UNLINK, NEW } from '../../utils/constants';

const MUTATION_FIELD_DEPENDENCY_BY_TYPENAME = {
  Service: {
    updateName: 'update_dependents_service',
    deleteName: '',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'service_type', type: 'object' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  OpticalPath: {
    updateName: 'update_dependents_opticalpath',
    deleteName: '',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'wavelength', type: 'simple' },
      { name: 'framing', type: 'object' },
      { name: 'capacity', type: 'object' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  OpticalMultiplexSection: {
    updateName: 'update_dependents_opticalmultiplexsection',
    deleteName: '',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  OpticalLink: {
    updateName: 'update_dependents_opticallink',
    deleteName: '',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'link_type', type: 'object' },
      { name: 'operational_state', type: 'object' },
      { name: 'interface_type', type: 'object' },
    ],
  },
};

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

  const dependentsToAdd = formatDependenciesToUpdate(
    MUTATION_FIELD_DEPENDENCY_BY_TYPENAME,
    router.dependents ? router.dependents.filter((dep) => dep.origin === NEW) : [],
  );

  const dependentsToUnlink = router.dependents
    ? router.dependents.filter((dep) => dep.status === UNLINK).map((dep) => ({ relation_id: dep.relation_id }))
    : [];

  const variables = {
    input: {
      update_input: {
        id: router.id,
        description: router.description,
        operational_state: router.operational_state,
        rack_units: router.rack_units,
        rack_position: router.rack_position,
        rack_back: router.rack_back,
        relationship_location: router.location && router.location.length ? router.location[0].id : null,
      },
      update_has_port: ports.toSaved,
      unlink_subinputs: [...ports.toUnlink, ...dependentsToUnlink],
      deleted_has_port: ports.toRemove,
      create_has_port: ports.toCreate,
      ...dependentsToAdd,
    },
  };

  console.log(JSON.stringify(variables));
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
