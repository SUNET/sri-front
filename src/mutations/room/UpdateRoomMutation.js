import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';
import { generateSubInputs } from '../MutationsUtils';
import {
  generateLocatedIn,
  generateLocatedInToUnlink,
  generateLocatedInToRemove,
} from '../locationsMutationsCommon/GenerateLocatedInMutation';

const mutation = graphql`
  mutation UpdateRoomMutation($input: CompositeRoomMutationInput!) {
    composite_room(input: $input) {
      updated {
        errors {
          field
          messages
        }
        room {
          ...RoomUpdateForm_room
        }
      }
    }
  }
`;

export default function UpdateRoomMutation(room, form) {
  const physicalToAdd = generateLocatedIn(room);
  const physicalToUnlink = generateLocatedInToUnlink(room);
  const physicalToRemove = generateLocatedInToRemove(room);
  const sitesToMutation = generateSubInputs(room.sites, null, null);
  const racksToMutation = generateSubInputs(room.racks, null, null);
  const variables = {
    input: {
      update_input: {
        id: room.id,
        name: room.name,
        floor: room.floor
      },
      unlink_subinputs: [...physicalToUnlink, ...sitesToMutation.toUnlink, ...racksToMutation.toUnlink],
      ...physicalToAdd,
      ...physicalToRemove,
      update_has_site: sitesToMutation.toUpdate,
      deleted_has_site: sitesToMutation.toDelete,
      update_has_rack: racksToMutation.toUpdate,
      deleted_has_rack: racksToMutation.toDelete,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_room.updated.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.update_room.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('Room', response.composite_room.updated.room.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify/changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
