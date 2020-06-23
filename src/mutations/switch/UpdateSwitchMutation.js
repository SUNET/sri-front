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

export default function UpdateSwitchMutation(switchData, form) {
  console.log('switchData: ', switchData);
  const variables = {
    input: {
      update_input: {
        id: switchData.id,
        name: switchData.name,
        description: switchData.description,
        ip_addresses: switchData.ip_addresses ? switchData.ip_addresses.join('\n') : null,
        rack_units: 2,
        rack_position: 3,
        operational_state: switchData.operational_state,
        relationship_provider: null,
        responsible_group: null,
        support_group: null,
        managed_by: switchData.managed_by,
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
        return response.composite_switch.updated.errors;
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
