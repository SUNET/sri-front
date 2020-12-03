import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { formatAddresses } from '../MutationsUtils';

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
  const variables = {
    input: {
      update_input: {
        id: site.id,
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
    },
  };
  console.log(JSON.stringify(variables));
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
