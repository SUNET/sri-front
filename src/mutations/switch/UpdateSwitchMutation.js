import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

const mutation = graphql`
  mutation UpdateSwitchMutation($input: CompositeSwitchMutationInput!) {
    composite_switch(input: $input) {
      updated {
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

export default function UpdateSwitchMutation(switchData, form) {
  const variables = {
    input: {
      update_input: {
        id: switchData.id,
        name: switchData.name,
        description: switchData.description,
        // switch_type: 'U3dpdGNoVHlwZTox', // SOLO EN LA CREACIÓN
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
      if (response.composite_switch.updated.errors) {
        form.props.notify(i18n.t('notify.error'), 'error');
        return response.update_switch.updated.errors;
      }
      form.props.reset();
      // form.refetch();
      if (form.props.isFromModal) {
        form.props.editedEntity('Switch', response.composite_switch.updated.switch.id);
      } else {
        form.props.notify(i18n.t('notify.changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
