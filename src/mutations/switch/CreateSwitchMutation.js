import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import CreateCommentMutation from '../CreateCommentMutation';
import { generatePortForInput, onCompleteCompositeCreationEntity } from '../MutationsUtils';

const mutation = graphql`
  mutation CreateSwitchMutation($input: CompositeSwitchMutationInput!) {
    composite_switch(input: $input) {
      created {
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

function CreateSwitchMutation(switchData, form) {
  const ports = generatePortForInput(switchData.ports);
  const variables = {
    input: {
      create_input: {
        name: switchData.name,

        operational_state: switchData.operational_state,
        description: switchData.description,
        managed_by: switchData.managed_by,
        switch_type: switchData.switch_type,
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
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      onCompleteCompositeCreationEntity(
        form,
        response,
        switchData,
        'Switch',
        'composite_switch',
        'switches',
        CreateCommentMutation,
      );
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

export default CreateSwitchMutation;
