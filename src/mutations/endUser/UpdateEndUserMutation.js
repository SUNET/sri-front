import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

const mutation = graphql`
  mutation UpdateEndUserMutation($input: UpdateEndUserInput!) {
    update_endUser(input: $input) {
      errors {
        field
        messages
      }
      endUser {
        id
        name
        description
        url
        __typename
        with_same_name {
          id
          name
          ... on Organization {
            website
            organization_id
            parent_organization {
              organization_id
            }
            affiliation_partner
            affiliation_customer
            affiliation_provider
            affiliation_host_user
            affiliation_site_owner
            affiliation_end_customer
            type {
              name
              value
            }
          }
          ... on EndUser {
            url
          }
          ... on Customer {
            url
          }
          ... on SiteOwner {
            url
          }
          ... on Provider {
            url
          }
          __typename
        }
        comments {
          id
          user {
            first_name
            last_name
          }
          comment
          submit_date
        }
        created
        creator {
          email
        }
        modified
        modifier {
          email
        }
      }
    }
  }
`;

export default function UpdateEndUserMutation(endUser, form) {
  const variables = {
    input: {
      id: endUser.id,
      name: endUser.name,
      description: endUser.description,
      url: endUser.url,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('response: ', response);
      if (response.update_endUser.errors) {
        form.props.notify(i18n.t('notify.error'), 'error');
        return response.update_endUser.updated.errors;
      }
      form.props.reset();
      form.props.notify(i18n.t('notify.changes-saved'), 'success');
      if (!form.props.isFromModal) {
        form.refetch();
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
