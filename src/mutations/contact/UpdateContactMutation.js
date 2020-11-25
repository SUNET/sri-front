import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { UNLINK, REMOVE, SAVED, CHANGED } from '../../utils/constants';

import { formattedRoles, formattedSubInputs } from './MutationsMethods';

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

export default function UpdateContactMutation(contact, form) {
  const { emails } = contact;
  const { phones } = contact;
  const { organizations } = contact;
  const emailsFormatted = formattedSubInputs(emails, 'email');
  const phonesFormatted = formattedSubInputs(phones, 'phone');
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
