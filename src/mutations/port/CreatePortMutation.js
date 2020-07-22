import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';

import { generateSubInputs } from '../MutationsUtils';

const mutation = graphql`
  mutation CreatePortMutation($input: CompositePortMutationInput!) {
    composite_port(input: $input) {
      created {
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
          }
          connected_to {
            id
            name
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

function formatterParentsByType(parents = [], parentType) {
  const parentsFiltered = parents.filter((el) => el['__typename'] === parentType);
  return generateSubInputs(parentsFiltered, `${parentType.toLowerCase()}_type`);
}

function CreatePortMutation(port, form) {
  const cableParents = formatterParentsByType(port.parents, 'Cable');
  const portParents = formatterParentsByType(port.parents, 'Port');
  const connectedTo = generateSubInputs(port.connectedTo, 'cable_type');

  const variables = {
    input: {
      create_input: {
        name: port.name,
        description: port.description,
        port_type: port.port_type,
      },
      update_subinputs: connectedTo.toUpdate,
      update_parent_port: portParents.toUpdate,
      update_parent_cable: cableParents.toUpdate,
      unlink_subinputs: [...connectedTo.toUnlink, ...cableParents.toUnlink, ...portParents.toUnlink],
      // delete_subinputs: [],
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_port.created.errors) {
        form.props.notify(i18n.t('notify.error'), 'error');
        return response.composite_port.created.errors;
      }
      const portId = response.composite_port.created.port.id;
      if (port.comment) {
        CreateCommentMutation(portId, port.comment);
      }
      form.props.notify(i18n.t('notify.network/ports-created-success'), 'success');
      if (form.props.history) {
        form.props.history.push(`/network/ports/${portId}`);
      } else {
        form.props.createdEntity('Port', portId);
        form.props.hideModalForm();
      }
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

export default CreatePortMutation;
