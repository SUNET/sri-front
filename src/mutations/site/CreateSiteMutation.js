import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';

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
  const variables = {
    input: {
      create_input: {
        name: site.name,
        country: 'Netherlands',
        site_type: '',
        area: 'Gävleborg',
        longitude: 47.83636,
        latitude: 60.834803,
        owner_id: 'SHY 86V',
        owner_site_name: 'Ivarsson & Björk AB',
        url: 'http://www.persson.se/',
        telenor_subscription_id: 'GN57LFQ',
        relationship_responsible_for: null,
      },
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
      form.props.notify(i18n.t('entity-notify-create/sites'), 'success');
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
