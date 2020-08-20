import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';

import { UNLINK, REMOVE, SAVED, CREATE } from '../../utils/constants';

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
  const portsToCreate = ODF.ports
    ? ODF.ports.filter((port) => port.status === CREATE).map((e) => ({ name: e.name, port_type: e.type.value }))
    : [];

  const portsToSaved = ODF.ports
    ? ODF.ports.filter((port) => port.status === SAVED).map((e) => ({ id: e.id, name: e.name }))
    : [];

  const portsToUnlink = ODF.ports
    ? ODF.ports.filter((port) => port.status === UNLINK).map((e) => ({ relation_id: e.relation_id }))
    : [];

  const portsToRemove = ODF.ports ? ODF.ports.filter((port) => port.status === REMOVE).map((e) => ({ id: e.id })) : [];

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
      },
      update_has_port: portsToSaved,
      unlink_subinputs: portsToUnlink,
      deleted_has_port: portsToRemove,
      create_has_port: portsToCreate,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_oDF.created.errors) {
        form.props.notify(i18n.t('notify.error'), 'error');
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
