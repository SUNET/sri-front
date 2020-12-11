import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';

import { formatDependenciesToUpdate, formatDependenciesToRemove } from '../MutationsUtils';

import MUTATION_FIELD_PROVIDE_BY_TYPENAME from './ConfigMutationsProvide';

import { NEW, UNLINK, REMOVE } from '../../utils/constants';

const mutation = graphql`
  mutation CreateProviderMutation($input: CompositeProviderMutationInput!) {
    composite_provider(input: $input) {
      created {
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

function CreateProviderMutation(entityData, form) {
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

  const variables = {
    input: {
      create_input: {
        name: entityData.name,
        description: entityData.description,
        url: entityData.url,
      },
      ...providesToAdd,
      ...providesToRemove,
      unlink_subinputs: [...providesToUnlink],
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_provider.created.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.composite_provider.created.errors;
      }
      const entityId = response.composite_provider.created.provider.__id;
      if (entityData.comment) {
        CreateCommentMutation(entityId, entityData.comment);
      }
      form.props.notify(i18n.t('entity-notify-create/providers'), 'success');
      if (form.props.history) {
        form.props.history.push(`/network/providers/${entityId}`);
      } else {
        form.props.createdEntity('Provider', entityId);
        form.props.hideModalForm();
      }
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

export default CreateProviderMutation;
