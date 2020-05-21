import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';

const mutation = graphql`
  mutation CreatePortMutation($input: CreatePortInput!) {
    create_port(input: $input) {
      errors {
        field
        messages
      }
      port {
        id
        name
        description
      }
    }
  }
`;

function CreatePortMutation(port, form) {
  const variables = {
    input: {
      name: port.name,
      description: port.description,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.create_port.errors) {
        form.props.notify(i18n.t('notify.error'), 'error');
        return response.create_port.updated.errors;
      }
      const portId = response.create_port.port.id;
      if (port.comment) {
        CreateCommentMutation(portId, port.comment);
      }
      form.props.history.push(`/network/ports/${portId}`);
      form.props.notify(i18n.t('notify.network/ports-created-success'), 'success');
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

/**
// MUTATION
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
        }
        description
        parent {
          id
          name
          ... on Port {
            port_type {
              value
            }
            description
          }
        }
        connected_to {
          id
          name
          ... on Cable {
            description
            cable_type {
              value
            }
          }
        }
      }
    }
    subcreated {
      errors {
        field
        messages
      }
      cable {
        id
        name
        description
        cable_type {
          value
        }
      }
    }
    parent_port_created {
      errors {
        field
        messages
      }
      port {
        id
        name
        port_type {
          value
        }
        description
      }
    }
  }
}

// VARIABLES
{
    "input": {
        "create_input": {
            "name": "test-01",
            "port_type": "Schuko",
            "description": ""
        },
        "create_subinputs": [
            {
                "name": "Test cable",
                "cable_type": "Patch",
                "description": ""
            }
        ],
        "create_parent_port": [
            {
                "name": "test-00",
                "port_type": "Schuko",
                "description": ""
            }
        ]
    }
}
*/
