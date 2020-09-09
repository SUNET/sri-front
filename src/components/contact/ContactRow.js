import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import '../../style/ModelRow.scss';

const getUniqRolesAndOrganizationsList = (roles) => {
  const uniqLists = roles.reduce(
    (acc, curr) => {
      if (!acc.roles.some((role) => role === curr.name)) {
        acc.roles.push(curr.name);
      }
      if (!acc.organizations.some((org) => org === curr.end.name)) {
        acc.organizations.push(curr.end.name);
      }
      return acc;
    },
    {
      roles: [],
      organizations: [],
    },
  );
  return uniqLists;
};

class ContactRow extends React.PureComponent {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  formatDate = (dateString) => {
    let date = new Date(dateString);
    return date.toISOString('YYYY-MM-DD');
  };

  render() {
    let contact = this.props.contact;
    const { roles, organizations } = getUniqRolesAndOrganizationsList(contact.roles);
    return (
      <tr onClick={(e) => this.props.onClick(e, contact)}>
        {(this.props.columnsVisible['name'] || this.props.showAllColumns) && (
          <td>
            {contact.first_name} {contact.last_name}
          </td>
        )}
        {(this.props.columnsVisible['organization'] || this.props.showAllColumns) && (
          <td>{roles && <span>{organizations.join(', ')}</span>}</td>
        )}
        {(this.props.columnsVisible['roles'] || this.props.showAllColumns) && (
          <td>{roles && <span>{roles.join(', ')}</span>}</td>
        )}
        {(this.props.columnsVisible['contact_type'] || this.props.showAllColumns) &&
          (contact.contact_type ? <td>{contact.contact_type.name}</td> : <td></td>)}
        <td></td>
      </tr>
    );
  }
}

const ContactRowFragment = createFragmentContainer(ContactRow, {
  contact: graphql`
    fragment ContactRow_contact on Contact {
      id
      first_name
      last_name
      contact_type {
        name
        value
      }
      modified
      roles {
        name
        end {
          name
        }
      }
    }
  `,
});

export default ContactRowFragment;
