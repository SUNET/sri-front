import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

const mutation = graphql`
  mutation UpdateOpticalNodeMutation($input: CompositeOpticalNodeMutationInput!) {
    composite_opticalNode(input: $input) {
      updated {
        errors {
          field
          messages
        }
        opticalNode {
          id
          name
          description
        }
      }
    }
  }
`;

export default function UpdateOpticalNodeMutation(opticalNode, form) {
  const variables = {
    input: {
      update_input: {
        id: opticalNode.id,
        name: opticalNode.name,
        description: opticalNode.description,
        rack_back: opticalNode.rack_back,
        rack_units: opticalNode.rack_units,
        rack_position: opticalNode.rack_position,
        operational_state: opticalNode.operational_state,
        type: opticalNode.type,
      },
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_opticalNode.updated.errors) {
        form.props.notify(i18n.t('notify.error'), 'error');
        return response.update_opticalNode.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('OpticalNode', response.composite_opticalNode.updated.opticalNode.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify.changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
