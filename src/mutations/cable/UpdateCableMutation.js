import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

const mutation = graphql`
  mutation UpdateCableMutation($input: UpdateCableInput!) {
    update_cable(input: $input) {
      errors {
        field
        messages
      }
      cable {
        id
        name
        description
        cable_type {
          name
          value
        }
      }
    }
  }
`;

export default function UpdateCableMutation(cable, form) {
  console.log('cable: ', cable);
  const variables = {
    input: {
      id: cable.id,
      name: cable.name,
      description: cable.description,
      cable_type: cable.cable_type,
      // provider: cable.provider_id,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response) => {
      if (response.update_cable.errors) {
        form.props.notify(i18n.t('notify.error'), 'error');
        return response.update_cable.updated.errors;
      }
      form.props.reset();
      // form.refetch();
      if (form.props.isFromModal) {
        form.props.editedEntity('Cable', response.update_cable.updated.cable.id);
      } else {
        form.props.notify(i18n.t('notify.changes-saved'), 'success');
      }
    },
    updater: () => {},
    onError: (err) => console.error(err),
  });
}
