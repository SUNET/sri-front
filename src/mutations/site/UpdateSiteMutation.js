import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

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
  const variables = {
    input: {
      update_input: {
        id: site.id,
        name: site.name,
        description: site.description,
      },
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
