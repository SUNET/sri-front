import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import CreateCommentMutation from '../CreateCommentMutation';
import { onCompleteCompositeCreationEntity } from '../MutationsUtils';

const mutation = graphql`
  mutation CreateSwitchMutation($input: CompositeSwitchMutationInput!) {
    composite_switch(input: $input) {
      created {
        errors {
          field
          messages
        }
        switch {
          id
          name
          description
          ip_addresses
          rack_units
          rack_position
          operational_state
          ip_addresses
          provider {
            id
            name
          }
          responsible_group {
            id
            name
          }
          support_group {
            id
            name
          }
          managed_by {
            value
            name
          }
          backup
          os
          os_version
          contract_number
          max_number_of_ports
          __typename
          comments {
            id
            user {
              first_name
              last_name
            }
            comment
            submit_date
          }
          created
          creator {
            email
          }
          modified
          modifier {
            email
          }
        }
      }
    }
  }
`;

function CreateSwitchMutation(switchData, form) {
  const variables = {
    input: {
      create_input: {
        name: switchData.name,

        operational_state: switchData.operational_state,
        description: switchData.description,
        switch_type: switchData.switch_type,
        ip_addresses: switchData.ip_addresses ? switchData.ip_addresses.join('\n') : null,
        relationship_provider: switchData.provider_id,

        contract_number: switchData.contract_number,
        backup: switchData.backup,
        rack_units: switchData.rack_units,
        rack_position: switchData.rack_position,

        os: switchData.os,
        os_version: switchData.os_version,

        responsible_group: null,
        support_group: null,
        managed_by: switchData.managed_by,
        max_number_of_ports: 20,
      },
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
