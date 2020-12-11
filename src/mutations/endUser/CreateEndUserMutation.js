import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';

import { generateSubInputs } from '../MutationsUtils';

const mutation = graphql`
  mutation CreateEndUserMutation($input: CompositeEndUserMutationInput!) {
    composite_endUser(input: $input) {
      created {
        errors {
          field
          messages
        }
        endUser {
          ...EndUserUpdateForm_endUser
        }
      }
    }
  }
`;

function CreateEndUserMutation(endUser, form) {
  const servicesSubInputs = generateSubInputs(
    endUser.uses && endUser.uses.length > 0 ? endUser.uses : [],
    'service_type',
    'operational_state',
  );
  const variables = {
    input: {
      create_input: {
        name: endUser.name,
        description: endUser.description,
        url: endUser.url,
      },
      update_uses_service: servicesSubInputs.toUpdate.map((s) => ({
        ...s,
        ...{ operational_state: s.operational_state.value },
      })),
      deleted_uses_service: servicesSubInputs.toDelete,
      unlink_subinputs: [...servicesSubInputs.toUnlink],
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_endUser.created.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.composite_endUser.created.errors;
      }
      const entityId = response.composite_endUser.created.endUser.__id;
      if (endUser.comment) {
        CreateCommentMutation(entityId, endUser.comment);
      }
      form.props.notify(i18n.t('entity-notify-create/end-users'), 'success');
      if (form.props.history) {
        form.props.history.push(`/network/end-users/${entityId}`);
      } else {
        form.props.createdEntity('EndUser', entityId);
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

export default CreateEndUserMutation;
