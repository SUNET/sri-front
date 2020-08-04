import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

const mutation = graphql`
  mutation UpdateHostMutation($input: CompositeHostMutationInput!) {
    composite_host(input: $input) {
      updated {
        errors {
          field
          messages
        }
        host {
          id
          name
          description
        }
      }
    }
  }
`;

export default function UpdateHostMutation(host, form) {
  console.log('host: ', host);
  const variables = {
    input: {
      update_input: {
        id: host.id,
        name: host.name,
        description: host.description,
      },
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_host.updated.errors) {
        form.props.notify(i18n.t('notify.error'), 'error');
        return response.update_host.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('Host', response.composite_host.updated.host.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify.changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
