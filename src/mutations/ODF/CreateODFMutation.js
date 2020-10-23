import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';

import { generatePortForInput } from '../MutationsUtils';

const mutation = graphql`
  mutation CreateODFMutation($input: CompositeODFMutationInput!) {
    composite_oDF(input: $input) {
      created {
        errors {
          field
          messages
        }
        oDF {
          id
          name
          description
          operational_state {
            name
            value
          }
          rack_units
          rack_position
          rack_back
          location {
            id
            name
          }
          max_number_of_ports
          ports {
            id
            name
            __typename
            relation_id
            type: port_type {
              name
            }
          }
        }
      }
    }
  }
`;

function CreateODFMutation(ODF, form) {
  const ports = generatePortForInput(ODF.ports);

  const variables = {
    input: {
      create_input: {
        name: ODF.name,
        description: ODF.description,
        operational_state: ODF.operational_state,
        max_number_of_ports: ODF.max_number_of_ports,
        rack_units: ODF.rack_units,
        rack_position: ODF.rack_position,
        rack_back: ODF.rack_back,
        relationship_location: ODF.location && ODF.location.length ? ODF.location[0].id : null,
      },
      update_has_port: ports.toSaved,
      unlink_subinputs: ports.toUnlink,
      deleted_has_port: ports.toRemove,
      create_has_port: ports.toCreate,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_oDF.created.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.composite_oDF.created.errors;
      }
      const entityId = response.composite_oDF.created.oDF.id;
      if (ODF.comment) {
        CreateCommentMutation(entityId, ODF.comment);
      }
      form.props.notify(i18n.t('notify.network/odfs-created-success'), 'success');
      if (form.props.history) {
        form.props.history.push(`/network/odfs/${entityId}`);
      } else {
        form.props.createdEntity('ODF', entityId);
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

export default CreateODFMutation;
