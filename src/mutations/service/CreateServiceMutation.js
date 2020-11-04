import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';

const mutation = graphql`
  mutation CreateServiceMutation($input: CompositeServiceMutationInput!) {
    composite_service(input: $input) {
      created {
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

function CreateServiceMutation(service, form) {
  const variables = {
    input: {
      create_input: {
        name: service.name,
        description: service.description,
        operational_state: service.operational_state,
        service_type: service.service_type_obj.name,
        relationship_provider: null,
        decommissioned_date: service.decommissioned_date,
        support_group: service.support_group_id,
        responsible_group: service.responsible_group_id,
      },
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_service.created.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.composite_service.created.errors;
      }
      const entityId = response.composite_service.created.service.__id;
      if (service.comment) {
        CreateCommentMutation(entityId, service.comment);
      }
      form.props.notify(i18n.t('entity-notify-create/services'), 'success');
      if (form.props.history) {
        form.props.history.push(`/network/${service.currentClass.path}/${entityId}`);
      } else {
        form.props.createdEntity('Service', entityId);
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

export default CreateServiceMutation;
