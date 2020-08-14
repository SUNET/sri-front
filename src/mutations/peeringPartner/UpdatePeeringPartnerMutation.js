import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

const mutation = graphql`
  mutation UpdatePeeringPartnerMutation($input: UpdatePeeringPartnerInput!) {
    update_peeringPartner(input: $input) {
      errors {
        field
        messages
      }
      peeringPartner {
        id
        name
        as_number
        peering_link
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

export default function UpdatePeeringPartnerMutation(peeringPartner, form) {
  const variables = {
    input: {
      id: peeringPartner.id,
      name: peeringPartner.name,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.update_peeringPartner.errors) {
        form.props.notify(i18n.t('notify.error'), 'error');
        return response.update_peeringPartner.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('PeeringPartner', response.peeringPartner.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify.changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
