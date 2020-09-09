import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

const mutation = graphql`
  mutation Update__EntityClassName__Mutation($input: Composite__EntityClassName__MutationInput!) {
    composite___entityName__(input: $input) {
      updated {
        errors {
          field
          messages
        }
        __entityName__ {
          ...__EntityClassName__UpdateForm___entityName__
        }
      }
    }
  }
`;

export default function Update__EntityClassName__Mutation(__entityName__, form) {
  const variables = {
    input: {
      update_input: {
        id: __entityName__.id,
        name: __entityName__.name,
        description: __entityName__.description,
      },
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite___entityName__.updated.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.update___entityName__.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('__EntityClassName__', response.composite___entityName__.updated.__entityName__.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify/changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
