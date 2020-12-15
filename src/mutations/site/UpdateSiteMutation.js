import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { formatAddresses } from '../MutationsUtils';

import { generateSubInputs } from '../MutationsUtils';

import {
  generateLocatedIn,
  generateLocatedInToUnlink,
  generateLocatedInToRemove,
} from '../locationsMutationsCommon/GenerateLocatedInMutation';

const mutation = graphql`
  mutation UpdateSiteMutation($input: CompositeSiteMutationInput!) {
    composite_site(input: $input) {
      updated {
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

export default function UpdateSiteMutation(site, form) {
  const formattedAddresses = formatAddresses(site.addresses);
  const physicalToAdd = generateLocatedIn(site);
  const physicalToUnlink = generateLocatedInToUnlink(site);
  const physicalToRemove = generateLocatedInToRemove(site);
  const roomsToMutation = generateSubInputs(site.rooms, null, null);
  const racksToMutation = generateSubInputs(site.racks, null, null);
  console.log('site.country: ', site.country);
  const variables = {
    input: {
      update_input: {
        id: site.id,
        name: site.name,
        country: site.country,
        site_type: site.site_type,
        area: site.area,
        longitude: site.longitude,
        latitude: site.latitude,
        owner_id: site.owner_id,
        owner_site_name: site.owner_site_name,
        url: site.url,
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
      if (response.composite_site.updated.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.update_site.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('Site', response.composite_site.updated.site.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify/changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
