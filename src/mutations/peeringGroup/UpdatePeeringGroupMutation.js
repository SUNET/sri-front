import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { UNLINK } from '../../utils/constants';

const mutation = graphql`
  mutation UpdatePeeringGroupMutation($input: CompositePeeringGroupMutationInput!) {
    composite_peeringGroup(input: $input) {
      updated {
        errors {
          field
          messages
        }
        peeringGroup {
          id
          name
          dependencies {
            __typename
            type: __typename
            relation_id
            id
            name
          }
        }
      }
    }
  }
`;

export default function UpdatePeeringGroupMutation(peeringGroup, form) {
  const dependenciesToUnlink = peeringGroup.dependencies
    ? peeringGroup.dependencies.filter((port) => port.status === UNLINK).map((e) => ({ relation_id: e.relation_id }))
    : [];
  const variables = {
    input: {
      update_input: {
        id: peeringGroup.id,
        name: peeringGroup.name,
      },
      unlink_subinputs: dependenciesToUnlink,
    },
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_peeringGroup.updated.errors) {
        form.props.notify(i18n.t('notify.error'), 'error');
        return response.update_peeringGroup.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('PeeringGroup', response.composite_peeringGroup.updated.peeringGroup.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify.changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
