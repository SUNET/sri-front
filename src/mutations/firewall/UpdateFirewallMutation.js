import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

const mutation = graphql`
  mutation UpdateFirewallMutation($input: CompositeFirewallMutationInput!) {
    composite_firewall(input: $input) {
      updated {
        errors {
          field
          messages
        }
        firewall {
          id
          name
          description
          operational_state
          managed_by {
            id
            value
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
          backup
          security_class {
            name
            value
          }
          security_comment
          os
          os_version
          model
          vendor
          service_tag
          end_support
          max_number_of_ports
          rack_units
          rack_position
          contract_number
          location {
            id
            name
          }
          owner {
            __typename
            id
            name
          }
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

export default function UpdateFirewallMutation(firewall, form) {
  console.log('firewall: ', firewall);
  const variables = {
    input: {
      update_input: {
        id: firewall.id,
        name: firewall.name,
        description: firewall.description,

        operational_state: firewall.operational_state,
        contract_number: firewall.contract_number,
        managed_by: firewall.managed_by,

        model: firewall.firewallModel,
        vendor: firewall.vendor,
        backup: firewall.backup,
        end_support: firewall.end_support,

        security_class: firewall.security_class,
        security_comment: firewall.security_comment,
        support_group: firewall.support_group_id,
        responsible_group: firewall.responsible_group_id,

        os: firewall.os,
        os_version: firewall.os_version,
        max_number_of_ports: firewall.max_number_of_ports,
        service_tag: firewall.service_tag,

        rack_units: firewall.rack_units,
        rack_position: firewall.rack_position,
        relationship_owner: 'Q3VzdG9tZXI6MzA5Ng==', // id customer/siteOwner/provider/endUser
      },
    },
  };
  // console.log(JSON.stringify(variables));
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_firewall.updated.errors) {
        form.props.notify(i18n.t('notify.error'), 'error');
        return response.update_firewall.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('Firewall', response.composite_firewall.updated.firewall.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify.changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
