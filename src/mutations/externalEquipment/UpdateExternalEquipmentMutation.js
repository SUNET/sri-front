import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

const mutation = graphql`
  mutation UpdateExternalEquipmentMutation($input: CompositeExternalEquipmentMutationInput!) {
    composite_externalEquipment(input: $input) {
      updated {
        errors {
          field
          messages
        }
        externalEquipment {
          id
          name
          description
        }
      }
    }
  }
`;

export default function UpdateExternalEquipmentMutation(externalEquipment, form) {
  const variables = {
    input: {
      update_input: {
        id: externalEquipment.id,
        name: externalEquipment.name,
        description: externalEquipment.description,
      },
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_externalEquipment.updated.errors) {
        form.props.notify(i18n.t('notify.error'), 'error');
        return response.update_externalEquipment.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('ExternalEquipment', response.composite_externalEquipment.updated.externalEquipment.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify.changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
