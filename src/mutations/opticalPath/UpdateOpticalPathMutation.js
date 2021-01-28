import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import configDependencies from '../DependenciesConfig';

import {
  getDependenciesToAdd,
  getDependenciesToUnlink,
  getDependenciesToDelete,
} from '../GeneralConfigMutationsFields';

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
        operational_state: opticalPath.operational_state,
        framing: opticalPath.framing,
        capacity: opticalPath.capacity,
        wavelength: opticalPath.wavelength,
        relationship_provider: opticalPath.provider_id,
      },
      unlink_subinputs: [
        ...getDependenciesToUnlink(opticalPath.dependencies),
        ...getDependenciesToUnlink(opticalPath.dependents),
      ],
      // dependencies
      ...getDependenciesToAdd(opticalPath.dependencies, configDependencies),
      ...getDependenciesToDelete(opticalPath.dependencies, configDependencies),
      // dependents (default config)
      ...getDependenciesToAdd(opticalPath.dependents),
      ...getDependenciesToDelete(opticalPath.dependents),
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
