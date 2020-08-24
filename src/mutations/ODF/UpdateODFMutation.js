import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { generatePortForInput } from '../MutationsUtils';

const mutation = graphql`
  mutation UpdateODFMutation($input: CompositeODFMutationInput!) {
    composite_oDF(input: $input) {
      updated {
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

export default function UpdateODFMutation(ODF, form) {
  const ports = generatePortForInput(ODF.ports);

  const variables = {
    input: {
      update_input: {
        id: ODF.id,
        name: ODF.name,
        description: ODF.description,
        operational_state: ODF.operational_state,
        max_number_of_ports: ODF.max_number_of_ports,
        rack_units: ODF.rack_units,
        rack_position: ODF.rack_position,
        rack_back: ODF.rack_back,
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
      if (response.composite_oDF.updated.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.update_ODF.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('ODF', response.composite_ODF.updated.ODF.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify/changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
