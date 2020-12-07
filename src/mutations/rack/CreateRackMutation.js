import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';

import { generateRackParentSubInputs } from '../MutationsUtils';

import {
  generateLocatedIn,
  generateLocatedInToUnlink,
  generateLocatedInToRemove,
} from '../locationsMutationsCommon/GenerateLocatedInMutation';

const mutation = graphql`
  mutation CreateRackMutation($input: CompositeRackMutationInput!) {
    composite_rack(input: $input) {
      created {
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

function CreateRackMutation(rack, form) {
  const physicalToAdd = generateLocatedIn(rack);
  const physicalToUnlink = generateLocatedInToUnlink(rack);
  const physicalToRemove = generateLocatedInToRemove(rack);
  const parentToMutation = generateRackParentSubInputs(rack.parent);
  const variables = {
    input: {
      create_input: {
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
      if (response.composite_rack.created.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.composite_rack.created.errors;
      }
      const entityId = response.composite_rack.created.rack.__id;
      if (rack.comment) {
        CreateCommentMutation(entityId, rack.comment);
      }
      form.props.notify(i18n.t('entity-notify-create/location-racks'), 'success');
      if (form.props.history) {
        form.props.history.push(`/network/location-racks/${entityId}`);
      } else {
        form.props.createdEntity('Rack', entityId);
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

export default CreateRackMutation;
