import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { generatePortForInput } from '../MutationsUtils';

const mutation = graphql`
  mutation UpdateSwitchMutation($input: CompositeSwitchMutationInput!) {
    composite_switch(input: $input) {
      updated {
        errors {
          field
          messages
        }
        switch {
          ...SwitchUpdateForm_switch
        }
      }
    }
  }
`;

export default function UpdateSwitchMutation(switchData, form) {
  const ports = generatePortForInput(switchData.ports);
  const variables = {
    input: {
      update_input: {
        id: switchData.id,
        name: switchData.name,

        description: switchData.description,
        managed_by: switchData.managed_by,
        operational_state: switchData.operational_state,
        ip_addresses: switchData.ip_addresses ? switchData.ip_addresses.join('\n') : null,
        relationship_provider: switchData.provider_id,

        contract_number: switchData.contract_number,
        backup: switchData.backup,
        rack_units: switchData.rack_units,
        rack_position: switchData.rack_position,

        os: switchData.os,
        os_version: switchData.os_version,
        support_group: switchData.support_group_id,
        responsible_group: switchData.responsible_group_id,

        max_number_of_ports: switchData.max_number_of_ports,
      },
      update_subinputs: ports.toSaved,
      unlink_subinputs: ports.toUnlink,
      delete_subinputs: ports.toRemove,
      create_subinputs: ports.toCreate,
    },
  };
  console.log(JSON.stringify(variables));
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_switch.updated.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.composite_switch.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('Switch', response.composite_switch.updated.switch.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify/changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
