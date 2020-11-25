import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import '../../style/ModelList.scss';

import { default as ROW_COMPONENT } from './ContactRow';

export class ContactList extends _BasicEntityListParentClass {
  MODEL_NAME = 'contact';
  MODEL_LIST_NAME = 'contacts';
  ROW_COMPONENT = ROW_COMPONENT;

  shouldComponentUpdate(nextProps, nextState) {
    const haveNewContacts = nextProps.contacts !== null;
    const haveOrgTypes = nextProps.organization_types !== null;
    const haveRoles = nextProps.roles_default !== null;
    return haveNewContacts && haveOrgTypes && haveRoles;
  }
}

export default createPaginationContainer(
  withTranslation()(withRouter(ContactList)),
  {
    contacts: graphql`
      fragment ContactList_contacts on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: ContactFilter }
          orderBy: { type: ContactOrderBy }
        ) {
        contacts(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "ContactList_contacts", filters: []) {
          edges {
            node {
              id
              ...ContactRow_contact
            }
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
        }
      }
    `,
    organization_types: graphql`
      fragment ContactList_organization_types on Query {
        getChoicesForDropdown(name: "organization_types") {
          name
          value
        }
      }
    `,
    roles_default: graphql`
      fragment ContactList_roles_default on Query {
        getRolesFromRoleGroup {
          id
          name
        }
      }
    `,
  },
  {
    direction: 'forward',
    query: graphql`
      # Pagination query to be fetched upon calling 'loadMore'.
      # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
      query ContactListForwardQuery($count: Int!, $cursor: String, $orderBy: ContactOrderBy, $filter: ContactFilter) {
        ...ContactList_contacts @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.contacts && props.contacts.contacts;
    },
    // This is also the default implementation of `getFragmentVariables` if it isn't provided.
    getFragmentVariables(previousVariables, totalCount) {
      return {
        ...previousVariables,
        count: totalCount,
      };
    },
    getVariables(props, paginationInfo, fragmentVariables) {
      return {
        count: paginationInfo.count,
        cursor: paginationInfo.cursor,
        orderBy: fragmentVariables.orderBy,
      };
    },
  },
);
