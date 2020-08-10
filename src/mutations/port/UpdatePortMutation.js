import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { generateSubInputs } from '../MutationsUtils';

const mutation = graphql`
  mutation UpdatePortMutation($input: CompositePortMutationInput!) {
    composite_port(input: $input) {
      updated {
        errors {
          field
          messages
        }
        port {
          id
          name
          port_type {
            value
            name
          }
          description
          parent {
            id
            name
            relation_id
            ... on Port {
              entityType: node_type {
                name: type
              }
              type: port_type {
                value
                name
              }
              description
            }
            ... on Cable {
              entityType: node_type {
                name: type
              }
              type: cable_type {
                value
                name
              }
              description
            }
            ... on ExternalEquipment {
              description
              entityType: node_type {
                name: type
              }
            }
            ... on Switch {
              description
              operational_state {
                name
                value
              }
              entityType: node_type {
                name: type
              }
            }
            ... on Firewall {
              description
              operational_state {
                name
                value
              }
              entityType: node_type {
                name: type
              }
            }
          }
          connected_to {
            id
            name
            relation_id
            ... on Cable {
              type: cable_type {
                value
                name
              }
              description
            }
          }
        }
      }
      subupdated {
        errors {
          field
          messages
        }
        cable {
          id
          name
          description
          type: cable_type {
            value
            name
          }
        }
      }
      parent_port_updated {
        errors {
          field
          messages
        }
      }
    }
  }
`;

function formatterParentsByType(parents, parentType) {
  return generateSubInputs(
    parents.filter((el) => el['__typename'] === parentType),
    `${parentType.toLowerCase()}_type`,
  );
}

function formatterParentsByTypeWithOperationState(parents, parentType) {
  return generateSubInputs(
    parents.filter((el) => el['__typename'] === parentType),
    null,
    'operational_state',
  );
}

function formatterParentsByTypeWithoutSpecificFields(parents, parentType) {
  return generateSubInputs(
    parents.filter((el) => el['__typename'] === parentType),
    null,
    null,
  );
}

export default function UpdatePortMutation(port, form) {
  const cableParents = formatterParentsByType(port.parents, 'Cable');
  const portParents = formatterParentsByType(port.parents, 'Port');
  const firewallParents = formatterParentsByTypeWithOperationState(port.parents, 'Firewall');
  const switchesParents = formatterParentsByTypeWithOperationState(port.parents, 'Switch');
  const externalEquipmentParents = formatterParentsByTypeWithoutSpecificFields(port.parents, 'ExternalEquipment');
  const connectedTo = generateSubInputs(port.connectedTo, 'cable_type');
  const variables = {
    input: {
      update_input: {
        id: port.id,
        name: port.name,
        description: port.description,
        port_type: port.port_type,
      },
      update_subinputs: connectedTo.toUpdate,
      update_parent_port: portParents.toUpdate,
      update_parent_cable: cableParents.toUpdate,
      update_parent_firewall: firewallParents.toUpdate,
      update_parent_externalequipment: externalEquipmentParents.toUpdate,
      update_parent_switch: switchesParents.toUpdate,
      unlink_subinputs: [...connectedTo.toUnlink, ...cableParents.toUnlink, ...portParents.toUnlink],
      delete_subinputs: [...connectedTo.toDelete, ...cableParents.toDelete, ...portParents.toDelete],
    },
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_port.updated.errors) {
        form.props.notify(i18n.t('notify.error'), 'error');
        return response.composite_port.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('Port', response.composite_port.updated.port.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify.changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
