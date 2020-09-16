import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { SAVED, REMOVE } from '../../utils/constants';

import { generatePortForInput } from '../MutationsUtils';

const mutation = graphql`
  mutation UpdateFirewallMutation($input: CompositeFirewallMutationInput!) {
    composite_firewall(input: $input) {
      updated {
        errors {
          field
          messages
        }
        firewall {
          ...FirewallUpdateForm_firewall
        }
      }
    }
  }
`;

export default function UpdateFirewallMutation(firewall, form) {
  const ports = generatePortForInput(firewall.ports);
  const ownerToSaved = firewall.owner ? firewall.owner.find((o) => o.status === SAVED) : [];
  const ownerToRemove = firewall.owner ? firewall.owner.find((o) => o.status === REMOVE) : [];
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
        rack_back: firewall.rack_back,

        relationship_owner: ownerToSaved ? ownerToSaved.id : '',
      },
      update_has_port: ports.toSaved,
      unlink_subinputs: ports.toUnlink,
      deleted_has_port: ports.toRemove,
      create_has_port: ports.toCreate,
    },
  };
  if (ownerToRemove.length) {
    variables.input.delete_owner = {
      id: ownerToRemove.id,
    };
  }

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_firewall.updated.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.update_firewall.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('Firewall', response.composite_firewall.updated.firewall.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify/changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
