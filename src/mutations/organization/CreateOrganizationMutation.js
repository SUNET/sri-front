import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import CreateComentMutation from '../CreateCommentMutation';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

const mutation = graphql`
  mutation CreateOrganizationMutation($input: CompositeOrganizationMutationInput!) {
    composite_organization(input: $input) {
      created {
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

export default function CreateOrganizationMutation(organization, form) {
  const newAddress = [];
  const updateAddress = [];
  const deleteAddress = [];

  const newContacts = [];
  let updateContacts = [];
  const deleteContacts = [];

  const { addresses } = organization;
  if (addresses) {
    Object.keys(addresses).forEach((addressKey) => {
      const address = addresses[addressKey];
      if (address.status === 'saved') {
        if (!address.created || address.created === undefined) {
          newAddress.push({
            organization: organization.id,
            name: 'main',
            street: address.street,
            postal_code: address.postal_code,
            postal_area: address.postal_area,
            phone: address.phone,
          });
        } else {
          updateAddress.push({
            organization: organization.id,
            name: 'main',
            id: address.id,
            street: address.street,
            postal_code: address.postal_code,
            postal_area: address.postal_area,
            phone: address.phone,
          });
        }
      }
    });
  }
  const { contacts } = organization;
  if (contacts) {
    updateContacts = contacts
      .filter((contact) => contact.created || contact.created !== undefined)
      .map((contact) => {
        const basicData = {
          id: contact.id,
          first_name: contact.first_name,
          last_name: contact.last_name,
          contact_type: contact.contact_type?.value,
        };
        if (contact.roles.length > 0) {
          return contact.roles.map((role) => ({
            ...basicData,
            role_id: role.id,
          }));
        }
        return basicData;
      })
      .flat();
  }

  const variables = {
    input: {
      create_input: {
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
      create_subinputs: newContacts,
      update_subinputs: updateContacts,
      delete_subinputs: deleteContacts,
      create_address: newAddress,
      update_address: updateAddress,
      delete_address: deleteAddress,
    },
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response) => {
      if (response.composite_organization.created.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.composite_organization.created.errors;
      }
      const organizationId = response.composite_organization.created.organization.id;
      if (organization.comment) {
        CreateComentMutation(organizationId, organization.comment);
      }
      form.props.history.push(`/community/organizations/${organizationId}`);
      form.props.notify(i18n.t('entity-notify-create/organization'), 'success');
    },
    updater: () => {},
    onError: (err) => console.error(err),
  });
}
