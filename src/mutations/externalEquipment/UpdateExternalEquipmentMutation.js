import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';
import { SAVED, REMOVE } from '../../utils/constants';

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
          rack_units
          rack_position
          ports {
            id
            name
          }
          owner {
            __typename
            id
            name
            ... on EndUser {
              type: node_type {
                name: type
              }
            }
            ... on Customer {
              type: node_type {
                name: type
              }
            }
            ... on SiteOwner {
              type: node_type {
                name: type
              }
            }
            ... on Provider {
              type: node_type {
                name: type
              }
            }
          }
          has {
            id
            name
          }
          __typename
        }
      }
    }
  }
`;

export default function UpdateExternalEquipmentMutation(externalEquipment, form) {
  const ownerToSaved = externalEquipment.owner.find((o) => o.status === SAVED);
  const ownerToRemove = externalEquipment.owner.find((o) => o.status === REMOVE);
  const variables = {
    input: {
      update_input: {
        id: externalEquipment.id,
        name: externalEquipment.name,
        description: externalEquipment.description,

        // General info
        rack_units: externalEquipment.rack_units,
        rack_position: externalEquipment.rack_position,

        // owner
        relationship_owner: ownerToSaved ? ownerToSaved.id : '', // id customer/siteOwner/provider/endUser
      },
    },
  };
  if (ownerToRemove) {
    variables.input.delete_owner = {
      id: ownerToRemove.id,
    };
  }
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
