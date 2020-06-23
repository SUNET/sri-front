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
  const variables = {
    input: {
      update_input: {
        id: switchData.id,
        name: switchData.name,

        description: switchData.description,
        managed_by: switchData.managed_by,
        operational_state: switchData.operational_state,
        ip_addresses: switchData.ip_addresses ? switchData.ip_addresses.join('\n') : null,

        contract_number: switchData.contract_number,
        backup: switchData.backup,
        rack_position: switchData.rack_position,

        os: switchData.os,
        os_version: switchData.os_version,

        support_group: null,
        responsible_group: null,

        rack_units: 2,
        max_number_of_ports: 20,
        relationship_provider: null,
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
