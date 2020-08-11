import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

const mutation = graphql`
  mutation UpdatePeeringGroupMutation($input: UpdatePeeringGroupInput!) {
    update_peeringGroup(input: $input) {
      errors {
        field
        messages
      }
      peeringGroup {
        id
        name
        dependents {
          id
        }
      }
    }
  }
`;

export default function UpdatePeeringGroupMutation(peeringGroup, form) {
  const variables = {
    input: {
      id: peeringGroup.id,
      name: peeringGroup.name,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.update_peeringGroup.errors) {
        form.props.notify(i18n.t('notify.error'), 'error');
        return response.update_peeringGroup.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('peeringGroup', response.peeringGroup.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify.changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
