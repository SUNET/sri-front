import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { UNLINK, SAVED, REMOVE } from '../../utils/constants';

const mutation = graphql`
  mutation UpdateGroupMutation($input: CompositeGroupMutationInput!) {
    composite_group(input: $input) {
      updated {
        errors {
          field
          messages
        }
        group {
          id
          name
          description
          contacts {
            id
            first_name
            last_name
            relation_id
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
              role_data {
                id
                name
              }
              end {
                id
                name
              }
            }
            outgoing {
              name
              relation {
                relation_id
                type
                end {
                  id
                  node_name
                }
              }
            }
          }
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
          member_of_groups {
            name
          }
        }
      }
    }
  }
`;

function formatContacts(form, contacts) {
  const result = {
    toUpdate: [],
    toUnlink: [],
    toDelete: [],
  };

  if (contacts) {
    result.toUnlink = contacts
      .filter((contact) => contact.status === UNLINK)
      .map((contact) => ({ relation_id: contact.group_relation_id }));

    result.toUpdate = contacts
      .filter((contact) => contact.status === SAVED)
      .map((contact) => ({
        id: contact.id,
        first_name: contact.first_name,
        last_name: contact.last_name,
        contact_type: contact.contact_type.value,
      }));

    result.toDelete = contacts.filter((contact) => contact.status === REMOVE).map((contact) => ({ id: contact.id }));
  }
  return result;
}

export default function UpdateGroupMutation(group, form) {
  const { members } = group;
  const formattedContacts = formatContacts(form, members);
  const variables = {
    input: {
      update_input: {
        id: group.id,
        name: group.name,
        description: group.description,
        clientMutationId: '',
      },
      create_subinputs: [],
      update_subinputs: formattedContacts.toUpdate,
      unlink_subinputs: formattedContacts.toUnlink,
      delete_subinputs: formattedContacts.toDelete,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_group.updated.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.composite_group.updated.errors;
      }
      form.props.reset();
      form.refetch();
      form.props.notify(i18n.t('notify/changes-saved'), 'success');
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
