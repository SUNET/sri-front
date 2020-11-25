import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import CreateComentMutation from '../CreateCommentMutation';
import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { formattedRoles, formattedSubInputs } from './MutationsMethods';

const mutation = graphql`
  mutation CreateContactMutation($input: CompositeContactMutationInput!) {
    composite_contact(input: $input) {
      created {
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

export default function CreateContactMutation(contact, form) {
  const { emails } = contact;
  const { phones } = contact;
  const { organizations } = contact;
  const emailsFormatted = formattedSubInputs(emails, 'email');
  const phonesFormatted = formattedSubInputs(phones, 'phone');
  const rolesFormatted = formattedRoles(organizations, form);

  const variables = {
    input: {
      create_input: {
        notes: contact.notes,
        title: contact.title,
        first_name: contact.first_name,
        last_name: contact.last_name,
        contact_type: contact.contact_type,
        pgp_fingerprint: contact.pgp_fingerprint,
        clientMutationId: '',
      },
      create_subinputs: emailsFormatted.toCreate,
      create_phones: phonesFormatted.toCreate,
      link_rolerelations: rolesFormatted.toAdd,
    },
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_contact.created.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.composite_contact.created.errors;
      }
      const contactId = response.composite_contact.created.contact.id;
      if (contact.comment) {
        CreateComentMutation(contactId, contact.comment);
      }
      if (form.props.history) {
        form.props.history.push(`/community/contacts/${contactId}`);
      } else {
        form.props.createdEntity('Contact', contactId);
        form.props.hideContactModal();
      }
      form.props.notify(i18n.t('entity-notify-create/contact'), 'success');
    },
    updater: (proxyStore, data) => {},
    onError: (err) => console.error(err),
  });
}
