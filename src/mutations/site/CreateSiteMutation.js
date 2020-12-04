import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';

import { formatAddresses } from '../MutationsUtils';

import { generateSubInputs } from '../MutationsUtils';

import {
  generateLocatedIn,
  generateLocatedInToUnlink,
  generateLocatedInToRemove,
} from '../locationsMutationsCommon/GenerateLocatedInMutation';

const mutation = graphql`
  mutation CreateSiteMutation($input: CompositeSiteMutationInput!) {
    composite_site(input: $input) {
      created {
        errors {
          field
          messages
        }
        site {
          ...SiteUpdateForm_site
        }
      }
    }
  }
`;

function CreateSiteMutation(site, form) {
  const formattedAddresses = formatAddresses(site.addresses);
  const physicalToAdd = generateLocatedIn(site);
  const physicalToUnlink = generateLocatedInToUnlink(site);
  const physicalToRemove = generateLocatedInToRemove(site);
  const roomsToMutation = generateSubInputs(site.rooms, null, null);
  const racksToMutation = generateSubInputs(site.racks, null, null);
  const variables = {
    input: {
      create_input: {
        name: site.name,
        country_code: site.country_code,
        site_type: site.site_type,
        area: site.area,
        longitude: site.longitude,
        latitude: site.latitude,
        owner_id: site.owner_id,
        owner_site_name: site.owner_site_name,
        url: site.url,
        telenor_subscription_id: site.telenor_subscription_id,
        relationship_responsible_for: site.site_responsible_id,
      },
      create_subinputs: formattedAddresses.toCreate,
      update_subinputs: formattedAddresses.toUpdate,
      delete_subinputs: formattedAddresses.toDelete,
      unlink_subinputs: [...physicalToUnlink, ...roomsToMutation.toUnlink, ...racksToMutation.toUnlink],
      ...physicalToAdd,
      ...physicalToRemove,
      update_has_room: roomsToMutation.toUpdate,
      deleted_has_room: roomsToMutation.toDelete,
      update_has_rack: racksToMutation.toUpdate,
      deleted_has_rack: racksToMutation.toDelete,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_site.created.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.composite_site.created.errors;
      }
      const entityId = response.composite_site.created.site.__id;
      if (site.comment) {
        CreateCommentMutation(entityId, site.comment);
      }
      form.props.notify(i18n.t('entity-notify-create/location-sites'), 'success');
      if (form.props.history) {
        form.props.history.push(`/network/location-sites/${entityId}`);
      } else {
        form.props.createdEntity('Site', entityId);
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

export default CreateSiteMutation;
