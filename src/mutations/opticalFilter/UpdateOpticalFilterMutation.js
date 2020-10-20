import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { generatePortForInput } from '../MutationsUtils';

const mutation = graphql`
  mutation UpdateOpticalFilterMutation($input: CompositeOpticalFilterMutationInput!) {
    composite_opticalFilter(input: $input) {
      updated {
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

export default function UpdateOpticalFilterMutation(opticalFilter, form) {
  const ports = generatePortForInput(opticalFilter.ports);

  const variables = {
    input: {
      update_input: {
        id: opticalFilter.id,
        name: opticalFilter.name,
        description: opticalFilter.description,
        operational_state: opticalFilter.operational_state,
        rack_back: opticalFilter.rack_back,
        rack_units: opticalFilter.rack_units,
        rack_position: opticalFilter.rack_position,
        max_number_of_ports: opticalFilter.max_number_of_ports,
        relationship_location:
          opticalFilter.location && opticalFilter.location.length ? opticalFilter.location[0].id : null,
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
      if (response.composite_opticalFilter.updated.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.update_opticalFilter.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('OpticalFilter', response.composite_opticalFilter.updated.opticalFilter.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify/changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
