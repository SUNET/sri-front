import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { generateRackParentSubInputs } from '../MutationsUtils';

import {
  generateLocatedIn,
  generateLocatedInToUnlink,
  generateLocatedInToRemove,
} from '../locationsMutationsCommon/GenerateLocatedInMutation';

const mutation = graphql`
  mutation UpdateRackMutation($input: CompositeRackMutationInput!) {
    composite_rack(input: $input) {
      updated {
        errors {
          field
          messages
        }
        rack {
          ...RackUpdateForm_rack
        }
      }
    }
  }
`;

export default function UpdateRackMutation(rack, form) {
  const physicalToAdd = generateLocatedIn(rack);
  const physicalToUnlink = generateLocatedInToUnlink(rack);
  const physicalToRemove = generateLocatedInToRemove(rack);
  const parentToMutation = generateRackParentSubInputs(rack.parent);
  const variables = {
    input: {
      update_input: {
        id: rack.id,
        name: rack.name,
        height: rack.height,
        width: rack.width,
        depth: rack.depth,
        rack_units: rack.rack_units,
      },
      unlink_subinputs: [...physicalToUnlink, ...parentToMutation.toUnlink],
      ...physicalToAdd,
      ...physicalToRemove,
      update_parent_site: parentToMutation.siteToUpdate,
      update_parent_room: parentToMutation.roomToUpdate,
      deleted_parent_site: parentToMutation.siteToDelete,
      deleted_parent_room: parentToMutation.roomToDelete,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_rack.updated.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.update_rack.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('Rack', response.composite_rack.updated.rack.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify/changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
