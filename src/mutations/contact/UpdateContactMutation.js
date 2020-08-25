import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { UNLINK, REMOVE, SAVED, CHANGED } from '../../utils/constants';

const mutation = graphql`
  mutation UpdateContactMutation($input: CompositeContactMutationInput!) {
    composite_contact(input: $input) {
      updated {
        errors {
          field
          messages
        }
        contact {
          id
          title
          notes
          contact_type {
            name
            value
          }
          first_name
          last_name
          pgp_fingerprint
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
              organization_id
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
          member_of_groups {
            name
          }
        }
      }
      subcreated {
        errors {
          field
          messages
        }
        email {
          id
          name
          type {
            name
            value
          }
        }
      }
      subupdated {
        errors {
          field
          messages
        }
        email {
          id
          name
          type {
            name
            value
          }
        }
      }
      phones_created {
        errors {
          field
          messages
        }
        phone {
          id
          name
          type {
            name
            value
          }
        }
      }
      phones_updated {
        errors {
          field
          messages
        }
        phone {
          id
          name
          type {
            name
            value
          }
        }
      }
      rolerelations {
        errors {
          field
          messages
        }
        rolerelation {
          relation_id
          type
          start {
            id
            first_name
            last_name
          }
          end {
            id
            name
          }
        }
      }
    }
  }
`;

const orderByRequestCriteria = (dataList = [], fieldName) => {
  const result = dataList.reduce(
    (acc, curr) => {
      if (curr.status === REMOVE) acc.toDelete.push({ id: curr.id });
      if (curr.status === SAVED) {
        if (curr.origin === 'store') {
          acc.toUpdate.push({
            id: curr.id,
            name: curr[fieldName],
            type: curr.type.value ? curr.type.value : curr.type,
          });
        } else {
          acc.toCreate.push({
            name: curr[fieldName],
            type: curr.type.value ? curr.type.value : curr.type,
          });
        }
      }
      return acc;
    },
    {
      toCreate: [],
      toUpdate: [],
      toDelete: [],
    },
  );
  return result;
};

const formattedRoles = (organizations = [], form) => {
  const result = organizations.reduce(
    (acc, curr) => {
      if (curr.status === UNLINK) {
        acc.toUnlink.push(
          ...curr.roles
            .filter((role) => Number.isInteger(role.relation_id))
            .map((role) => ({ relation_id: role.relation_id })),
        );
      } else if (curr.status === CHANGED) {
        acc.toAdd.push(
          ...curr.roles
            .filter((role) => role.status === SAVED)
            .map((role) => ({
              role_id: role.id,
              organization_id: curr.id,
            })),
        );
        acc.toUnlink.push(
          ...curr.roles
            .filter((role) => Number.isInteger(role.relation_id))
            .map((role) => ({ relation_id: role.relation_id })),
        );
      } else {
        acc.toUnlink.push(
          ...curr.roles
            .filter((role) => role.status === UNLINK && Number.isInteger(role.relation_id))
            .map((role) => ({ relation_id: role.relation_id })),
        );
        acc.toAdd.push(
          ...curr.roles
            .filter((role) => role.status === SAVED && !Number.isInteger(role.relation_id) && !role.relation_id)
            .map((role) => ({
              role_id: role.id,
              organization_id: curr.id,
            })),
        );
      }
      // if (curr.status === 'saved') {
      //   if (curr.origin === 'store') {
      //     if (curr.role_obj) {
      //       // the backend should update the relationship when a node changes, not delete it to create a new one
      //       if (form.props.isDirty_organizations_roles[index]) {
      //         acc.toUnlink.push({ relation_id: curr.role_obj.relation_id });
      //         acc.toAdd.push({
      //           role_id: curr.role,
      //           organization_id: curr.organization,
      //         });
      //       }
      //     }
      //   } else {
      //     const newOrgToPush = {
      //       organization_id: curr.organization,
      //     };
      //     if (curr.role) {
      //       newOrgToPush.role_id = curr.role;
      //     }
      //     acc.toAdd.push(newOrgToPush);
      //   }
      // } else if (curr.status === 'remove') {
      //   acc.toUnlink.push({ relation_id: curr.role_obj.relation_id });
      // }
      return acc;
    },
    {
      toAdd: [],
      toUnlink: [],
    },
  );
  return result;
};

export default function UpdateContactMutation(contact, form) {
  const { emails } = contact;
  const { phones } = contact;
  const { organizations } = contact;
  const emailsFormatted = orderByRequestCriteria(emails, 'email');
  const phonesFormatted = orderByRequestCriteria(phones, 'phone');
  const rolesFormatted = formattedRoles(organizations, form);

  const variables = {
    input: {
      update_input: {
        id: contact.id,
        notes: contact.notes,
        title: contact.title,
        first_name: contact.first_name,
        last_name: contact.last_name,
        contact_type: contact.contact_type.toLowerCase(),
        pgp_fingerprint: contact.pgp_fingerprint,
        clientMutationId: '',
      },
      create_subinputs: emailsFormatted.toCreate,
      update_subinputs: emailsFormatted.toUpdate,
      delete_subinputs: emailsFormatted.toDelete,
      create_phones: phonesFormatted.toCreate,
      update_phones: phonesFormatted.toUpdate,
      delete_phones: phonesFormatted.toDelete,
      link_rolerelations: rolesFormatted.toAdd,
      unlink_subinputs: rolesFormatted.toUnlink,
    },
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_contact.updated.errors) {
        return response.composite_contact.updated.errors;
      }
      form.props.reset();
      form.refetch();
      form.props.notify(i18n.t('notify/changes-saved'), 'success');
    },
    updater: (proxyStore, data) => {},
    onError: (err) => console.error(err),
  });
}
