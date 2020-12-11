import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { generateSubInputs } from '../MutationsUtils';

const mutation = graphql`
  mutation UpdateEndUserMutation($input: CompositeEndUserMutationInput!) {
    composite_endUser(input: $input) {
      updated {
        endUser {
          ...EndUserUpdateForm_endUser
        }
      }
    }
  }
`;

export default function UpdateEndUserMutation(endUser, form) {
  const servicesSubInputs = generateSubInputs(
    endUser.uses && endUser.uses.length > 0 ? endUser.uses : [],
    'service_type',
    'operational_state',
  );

  const variables = {
    input: {
      update_input: {
        id: endUser.id,
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
      if (response.composite_endUser.updated.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.composite_endUser.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('EndUser', response.composite_endUser.updated.endUser.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify/changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
