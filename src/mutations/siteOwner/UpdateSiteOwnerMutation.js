import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { generateSubInputs } from '../MutationsUtils';

const mutation = graphql`
  mutation UpdateSiteOwnerMutation($input: CompositeSiteOwnerMutationInput!) {
    composite_siteOwner(input: $input) {
      updated {
        siteOwner {
          ...SiteOwnerUpdateForm_siteOwner
        }
      }
    }
  }
`;

export default function UpdateSiteOwnerMutation(entityData, form) {
  const sitesSubInputs = generateSubInputs(
    entityData.responsible_for && entityData.responsible_for.length > 0 ? entityData.responsible_for : [],
    null,
    null,
  );

  const variables = {
    input: {
      update_input: {
        id: entityData.id,
        name: entityData.name,
        description: entityData.description,
        url: entityData.url,
      },
      unlink_subinputs: sitesSubInputs.toUnlink,
      update_responsible_for_site: sitesSubInputs.toUpdate,
      deleted_responsible_for_site: sitesSubInputs.toDelete,
    },
  };

  console.log(JSON.stringify(variables));

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_siteOwner.updated.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.composite_siteOwner.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('SiteOwner', response.composite_siteOwner.updated.siteOwner.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify/changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
