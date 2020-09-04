import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';

const mutation = graphql`
  mutation CreateOpticalPathMutation($input: CompositeOpticalPathMutationInput!) {
    composite_opticalPath(input: $input) {
      created {
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

function CreateOpticalPathMutation(opticalPath, form) {
  const variables = {
    input: {
      create_input: {
        name: opticalPath.name,
        description: opticalPath.description,
        operational_state: opticalPath.operational_state,
        framing: opticalPath.framing,
        capacity: opticalPath.capacity,
        wavelength: opticalPath.wavelength,
        provider: opticalPath.provider,
      },
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_opticalPath.created.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.composite_opticalPath.created.errors;
      }
      const entityId = response.composite_opticalPath.created.opticalPath.__id;
      if (opticalPath.comment) {
        CreateCommentMutation(entityId, opticalPath.comment);
      }
      form.props.notify(i18n.t('entity-notify-create/opticalPaths'), 'success');
      if (form.props.history) {
        form.props.history.push(`/network/opticalPaths/${entityId}`);
      } else {
        form.props.createdEntity('OpticalPath', entityId);
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

export default CreateOpticalPathMutation;
