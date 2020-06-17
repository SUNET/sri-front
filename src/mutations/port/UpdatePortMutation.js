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
            ... on Port {
              type: port_type {
                value
                name
              }
              description
            }
            ... on Cable {
              type: cable_type {
                value
                name
              }
              description
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

function formatterParentsByType(parents, parentType) {
  return generateSubInputs(
    parents.filter((el) => el['__typename'] === parentType),
    `${parentType.toLowerCase()}_type`,
  );
}

export default function UpdatePortMutation(port, form) {
  const cableParents = formatterParentsByType(port.parents, 'Cable');
  console.log('cableParents: ', cableParents);
  const portParents = formatterParentsByType(port.parents, 'Port');
  console.log('portParents: ', portParents);
  const connectedTo = generateSubInputs(port.connectedTo, 'cable_type');
  console.log('connectedTo: ', connectedTo);
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
      unlink_subinputs: [...connectedTo.toUnlink, ...cableParents.toUnlink, ...portParents.toUnlink],
      delete_subinputs: [...connectedTo.toDelete, ...cableParents.toDelete, ...portParents.toDelete],
    },
  };
  console.log(JSON.stringify(variables));
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_port.updated.errors) {
        form.props.notify(i18n.t('notify.error'), 'error');
        return response.update_port.updated.errors;
      }
      form.props.reset();
      // form.refetch();
      if (form.props.isFromModal) {
        form.props.editedEntity('Port', response.composite_port.updated.port.id);
      } else {
        form.props.notify(i18n.t('notify.changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
