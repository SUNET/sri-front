import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { UNLINK, SAVED, REMOVE } from '../../utils/constants';

// import { CONTACT_WORK } from "../../utils/constants";

const mutation = graphql`
  mutation UpdateOrganizationMutation($input: CompositeOrganizationMutationInput!) {
    composite_organization(input: $input) {
      updated {
        errors {
          field
          messages
        }
        organization {
          id
          name
          type {
            name
            value
          }
          website
          organization_id
          organization_number
          affiliation_customer
          affiliation_end_customer
          affiliation_host_user
          affiliation_partner
          affiliation_provider
          affiliation_site_owner
          parent_organization {
            organization_id
          }
          contacts {
            id
            first_name
            last_name
            contact_type {
              name
              value
            }
            emails {
              id
              name
              type {
                name
                value
              }
            }
            phones {
              id
              name
              type {
                name
                value
              }
            }
            roles {
              relation_id
              role_data {
                id
                name
              }
              end {
                id
                name
              }
            }
            member_of_groups {
              name
            }
          }
          comments {
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
      address_created {
        errors {
          field
          messages
        }
        address {
          id
          name
          street
          postal_code
          postal_area
          phone
        }
      }
      address_updated {
        errors {
          field
          messages
        }
        address {
          id
          name
          street
          postal_code
          postal_area
          phone
        }
      }
      subcreated {
        errors {
          field
          messages
        }
        contact {
          id
          first_name
          last_name
          contact_type {
            name
            value
          }
          emails {
            id
            name
            type {
              name
              value
            }
          }
          phones {
            id
            name
            type {
              name
              value
            }
          }
          roles {
            relation_id
            role_data {
              id
              name
            }
            end {
              id
              name
            }
          }
          member_of_groups {
            name
          }
        }
      }
      subupdated {
        errors {
          field
          messages
        }
        contact {
          id
          first_name
          last_name
          contact_type {
            name
            value
          }
          emails {
            id
            name
            type {
              name
              value
            }
          }
          phones {
            id
            name
            type {
              name
              value
            }
          }
          roles {
            relation_id
            role_data {
              id
              name
            }
            end {
              id
              name
            }
          }
          member_of_groups {
            name
          }
        }
      }
    }
  }
`;

function formatAddresses(organizationId, addresses) {
  const result = {
    toCreate: [],
    toUpdate: [],
    toDelete: [],
  };

  const formatterAddressMap = (addressElement) => ({
    id: addressElement.id,
    organization: organizationId,
    name: 'main',
    street: addressElement.street,
    postal_code: addressElement.postal_code,
    postal_area: addressElement.postal_area,
    phone: addressElement.phone,
  });

  if (addresses) {
    result.toCreate = addresses
      .filter((address) => address.status === SAVED && (!address.created || address.created === undefined))
      .map(formatterAddressMap);

    result.toUpdate = addresses
      .filter((address) => address.status === SAVED && address.created)
      .map(formatterAddressMap);

    result.toDelete = addresses.filter((address) => address.status === REMOVE).map((address) => ({ id: address.id }));
  }
  return result;
}

function formatContacts(form, contacts) {
  const result = {
    toUpdate: [],
    toUnlink: [],
    toDelete: [],
    rolesToUnlink: [],
  };

  if (contacts) {
    result.toUnlink = contacts
      .filter((contact) => contact.status === UNLINK)
      .map((contact) => contact.roles.map((role) => ({ relation_id: role.relation_id })))
      .flat();

    result.toUpdate = contacts
      .filter((contact) => contact.status === SAVED)
      .map((contact) => {
        const rolesToAdd = contact.roles.filter((role) => role.status === SAVED);
        const basicData = {
          id: contact.id,
          first_name: contact.first_name,
          last_name: contact.last_name,
          contact_type: contact.contact_type?.value,
        };
        if (rolesToAdd.length > 0) {
          return rolesToAdd.map((role) => ({
            ...basicData,
            role_id: role.id,
          }));
        }
        return basicData;
      })
      .flat();
    result.rolesToUnlink = contacts
      .filter((contact) => contact.status === SAVED)
      .map((contact) => {
        return contact.roles
          .filter((role) => role.status === UNLINK)
          .map((role) => ({ relation_id: role.relation_id }));
      })
      .flat();
    result.toDelete = contacts.filter((contact) => contact.status === REMOVE).map((contact) => ({ id: contact.id }));
  }
  return result;
}

export default function UpdateOrganizationMutation(organization, form) {
  const parentOrganizationUnlink = [];
  if (form.props.isDirty_relationship_parent_of) {
    parentOrganizationUnlink.push({ relation_id: organization.isDirty_relationship_parent_of });
  }

  const { addresses } = organization;
  const formattedAddresses = formatAddresses(organization.id, addresses);

  const { contacts } = organization;
  const formattedContacts = formatContacts(form, contacts);

  const variables = {
    input: {
      update_input: {
        id: organization.id,
        name: organization.name,
        description: organization.description,
        organization_id: organization.organization_id,
        organization_number: organization.organization_number,
        type: organization.type,
        website: organization.website,
        affiliation_customer: organization.affiliation_customer,
        affiliation_end_customer: organization.affiliation_end_customer,
        affiliation_host_user: organization.affiliation_host_user,
        affiliation_partner: organization.affiliation_partner,
        affiliation_provider: organization.affiliation_provider,
        affiliation_site_owner: organization.affiliation_site_owner,
        incident_management_info: organization.incident_management_info,
        relationship_parent_of: organization.relationship_parent_of,
        clientMutationId: '',
      },
      create_address: formattedAddresses.toCreate,
      update_address: formattedAddresses.toUpdate,
      delete_address: formattedAddresses.toDelete,
      create_subinputs: [],
      update_subinputs: formattedContacts.toUpdate,
      unlink_subinputs: [
        ...parentOrganizationUnlink,
        ...formattedContacts.toUnlink,
        ...formattedContacts.rolesToUnlink,
      ],
      delete_subinputs: formattedContacts.toDelete,
    },
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_organization.updated.errors) {
        return response.composite_organization.updated.errors;
      } else {
        form.props.reset();
        form.refetch();
        form.props.notify(i18n.t('notify/changes-saved'), 'success');
      }
    },
    updater: (proxyStore) => {},
    onError: (err) => console.error(err),
  });
}
