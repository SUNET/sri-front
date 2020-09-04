import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

const mutation = graphql`
  mutation UpdateOpticalPathMutation($input: CompositeOpticalPathMutationInput!) {
    composite_opticalPath(input: $input) {
      updated {
        errors {
          field
          messages
        }
        opticalPath {
          ...OpticalPathUpdateForm_opticalPath
        }
      }
    }
  }
`;

export default function UpdateOpticalPathMutation(opticalPath, form) {
  const variables = {
    input: {
      update_input: {
        id: opticalPath.id,
        name: opticalPath.name,
        description: opticalPath.description,
      },
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_opticalPath.updated.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.update_opticalPath.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('OpticalPath', response.composite_opticalPath.updated.opticalPath.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify/changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
