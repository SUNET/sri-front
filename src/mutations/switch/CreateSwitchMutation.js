import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
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
        description: switchData.description,
        switch_type: 'U3dpdGNoVHlwZTox',
        ip_addresses: '127.0.0.1\n168.192.0.1',
        rack_units: 2,
        rack_position: 3,
        operational_state: 'In service',
        relationship_provider: null,
        responsible_group: null,
        support_group: null,
        managed_by: 'Puppet',
        backup: 'Manual script',
        os: 'GNU/Linux',
        os_version: '5.8',
        contract_number: '001',
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
