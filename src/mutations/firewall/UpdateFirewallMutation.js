import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

const mutation = graphql`
  mutation UpdateFirewallMutation($input: CompositeFirewallMutationInput!) {
    composite_firewall(input: $input) {
      updated {
        errors {
          field
          messages
        }
        firewall {
          id
          name
          description
        }
      }
    }
  }
`;

export default function UpdateFirewallMutation(firewall, form) {
  const variables = {
    input: {
      update_input: {
        id: firewall.id,
        name: firewall.name,
        description: firewall.description,
      },
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_firewall.updated.errors) {
        form.props.notify(i18n.t('notify.error'), 'error');
        return response.update_firewall.updated.errors;
      }
      form.props.reset();
      // form.refetch();
      if (form.props.isFromModal) {
        form.props.editedEntity('Firewall', response.composite_firewall.updated.firewall.id);
      } else {
        form.props.notify(i18n.t('notify.changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
