import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';
import { formatExternalEquipmentVariables } from '../MutationsUtils';

const mutation = graphql`
  mutation CreateExternalEquipmentMutation($input: CompositeExternalEquipmentMutationInput!) {
    composite_externalEquipment(input: $input) {
      created {
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

function CreateExternalEquipmentMutation(externalEquipment, form) {
  const variables = formatExternalEquipmentVariables(externalEquipment, false);
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_externalEquipment.created.errors) {
        form.props.notify(i18n.t('notify.error'), 'error');
        return response.composite_externalEquipment.created.errors;
      }
      const externalEquipmentId = response.composite_externalEquipment.created.externalEquipment.id;
      if (externalEquipment.comment) {
        CreateCommentMutation(externalEquipmentId, externalEquipment.comment);
      }
      form.props.notify(i18n.t('notify.network/externalEquipments-created-success'), 'success');
      if (form.props.history) {
        form.props.history.push(`/network/external-equipments/${externalEquipmentId}`);
      } else {
        form.props.createdEntity('ExternalEquipment', externalEquipmentId);
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

export default CreateExternalEquipmentMutation;
