import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import getMutationData from './FormatServiceDataMutation.js';

const mutation = graphql`
  mutation UpdateServiceMutation($input: CompositeServiceMutationInput!) {
    composite_service(input: $input) {
      updated {
        errors {
          field
          messages
        }
        service {
          ...ServiceUpdateForm_service
        }
      }
    }
  }
`;

export default function UpdateServiceMutation(service, form) {
  const { createOrUpdateInput, subInputs } = getMutationData(service);
  const variables = {
    input: {
      update_input: {
        id: service.id,
        ...createOrUpdateInput,
      },
      ...subInputs,
    },
  };
  if (service.service_type_obj.name === 'Project') {
    variables.input.update_input.project_end_date = service.project_end_date;
  }
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_service.updated.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.update_service.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('Service', response.composite_service.updated.service.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify/changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
