import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';

import { generatePortForInput } from '../MutationsUtils';

const mutation = graphql`
  mutation CreateOpticalFilterMutation($input: CompositeOpticalFilterMutationInput!) {
    composite_opticalFilter(input: $input) {
      created {
        errors {
          field
          messages
        }
        opticalFilter {
          ...OpticalFilterUpdateForm_opticalFilter
        }
      }
    }
  }
`;

function CreateOpticalFilterMutation(opticalFilter, form) {
  const ports = generatePortForInput(opticalFilter.ports);

  const variables = {
    input: {
      create_input: {
        name: opticalFilter.name,
        description: opticalFilter.description,
        operational_state: opticalFilter.operational_state,
        rack_back: opticalFilter.rack_back,
        rack_units: opticalFilter.rack_units,
        rack_position: opticalFilter.rack_position,
        max_number_of_ports: opticalFilter.max_number_of_ports,
      },
      update_has_port: ports.toSaved,
      unlink_subinputs: ports.toUnlink,
      deleted_has_port: ports.toRemove,
      create_has_port: ports.toCreate,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_opticalFilter.created.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.composite_opticalFilter.created.errors;
      }
      const entityId = response.composite_opticalFilter.created.opticalFilter.__id;
      if (opticalFilter.comment) {
        CreateCommentMutation(entityId, opticalFilter.comment);
      }
      form.props.notify(i18n.t('entity-notify-create/optical-filters'), 'success');
      if (form.props.history) {
        form.props.history.push(`/network/optical-filters/${entityId}`);
      } else {
        form.props.createdEntity('OpticalFilter', entityId);
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

export default CreateOpticalFilterMutation;
