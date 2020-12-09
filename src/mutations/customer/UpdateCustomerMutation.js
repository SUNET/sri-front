import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';
import { NEW, UNLINK, REMOVE } from '../../utils/constants';
import MUTATION_FIELD_OWNS_BY_TYPENAME from './ConfigMutationsOwns';
import { formatDependenciesToUpdate, formatDependenciesToRemove, generateSubInputs } from '../MutationsUtils';

const mutation = graphql`
  mutation UpdateCustomerMutation($input: CompositeCustomerMutationInput!) {
    composite_customer(input: $input) {
      updated {
        customer {
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
            ... on PeeringPartner {
              peering_link
            }
            __typename
          }
          uses {
            __typename
            id
            name
            description
            relation_id
            ... on Service {
              service_type {
                name
              }
              operational_state {
                value
                name
              }
            }
          }
          owns {
            __typename
            id
            name
            relation_id
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
  }
`;

export default function UpdateCustomerMutation(customer, form) {
  const ownsToAdd = formatDependenciesToUpdate(
    MUTATION_FIELD_OWNS_BY_TYPENAME,
    customer.owns ? customer.owns.filter((dep) => dep.origin === NEW) : [],
  );

  const ownsToRemove = formatDependenciesToRemove(
    MUTATION_FIELD_OWNS_BY_TYPENAME,
    customer.owns ? customer.owns.filter((dep) => dep.status === REMOVE) : [],
  );

  const ownsToUnlink = customer.owns
    ? customer.owns.filter((loc) => loc.status === UNLINK).map((loc) => ({ relation_id: loc.relation_id }))
    : [];

  const servicesSubInputs = generateSubInputs(
    customer.uses && customer.uses.length > 0 ? customer.uses : [],
    'service_type',
    'operational_state',
  );

  const variables = {
    input: {
      update_input: {
        id: customer.id,
        name: customer.name,
        description: customer.description,
        url: customer.url,
      },
      ...ownsToAdd,
      ...ownsToRemove,
      update_uses_service: servicesSubInputs.toUpdate.map((s) => ({
        ...s,
        ...{ operational_state: s.operational_state.value },
      })),
      deleted_uses_service: servicesSubInputs.toDelete,
      unlink_subinputs: [...ownsToUnlink, ...servicesSubInputs.toUnlink],
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_customer.updated.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.composite_customer.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('Customer', response.composite_customer.updated.customer.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify/changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
