import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { generateSubInputs, formatDependenciesToUpdate, formatDependenciesToRemove } from '../MutationsUtils';

import MUTATION_FIELD_PROVIDE_BY_TYPENAME from './ConfigMutationsProvide';

import { NEW, UNLINK, REMOVE } from '../../utils/constants';

const mutation = graphql`
  mutation UpdateProviderMutation($input: CompositeProviderMutationInput!) {
    composite_provider(input: $input) {
      updated {
        errors {
          field
          messages
        }
        provider {
          ...ProviderUpdateForm_provider
        }
      }
    }
  }
`;

export default function UpdateProviderMutation(entityData, form) {
  const providesToAdd = formatDependenciesToUpdate(
    MUTATION_FIELD_PROVIDE_BY_TYPENAME,
    entityData.provides ? entityData.provides.filter((dep) => dep.origin === NEW) : [],
  );

  const providesToRemove = formatDependenciesToRemove(
    MUTATION_FIELD_PROVIDE_BY_TYPENAME,
    entityData.provides ? entityData.provides.filter((dep) => dep.status === REMOVE) : [],
  );

  const providesToUnlink = entityData.provides
    ? entityData.provides.filter((loc) => loc.status === UNLINK).map((loc) => ({ relation_id: loc.relation_id }))
    : [];

  const servicesSubInputs = generateSubInputs(
    entityData.uses && entityData.uses.length > 0 ? entityData.uses : [],
    'service_type',
    'operational_state',
  );

  const variables = {
    input: {
      update_input: {
        id: entityData.id,
        name: entityData.name,
        description: entityData.description,
        url: entityData.url,
      },
      ...providesToAdd,
      ...providesToRemove,
      unlink_subinputs: [...providesToUnlink, ...servicesSubInputs.toUnlink],
      update_uses_service: servicesSubInputs.toUpdate.map((s) => ({
        ...s,
        ...{ operational_state: s.operational_state.value },
      })),
      deleted_uses_service: servicesSubInputs.toDelete,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_provider.updated.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.composite_provider.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('Provider', response.composite_provider.updated.provider.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify/changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
