import { createPaginationContainer } from 'react-relay';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import graphql from 'babel-plugin-relay/macro';

import DashBoardContactRowComponent from './DashBoardContactRow';

import _DashBoardListParentClass from '../common/_DashBoardListParentClass';

import '../../style/DashBoardBlock.scss';

class DashBoardContactList extends _DashBoardListParentClass {
  constructor(props) {
    super(props);
    this.MAIN_PROP_NAME = 'contacts';
    this.SINGLE_ELEMENT_NAME = 'contact';
    this.RowComponent = DashBoardContactRowComponent;
    this.HEADER_DATA = {
      title: 'Contacts',
      sortKey: {
        defaultUp: 'dashboard.order.recent_last',
        down: 'dashboard.order.recent_first',
      },
    };
    this.FOOTER_DATA = { label: 'dashboard.contacts', link: '/community/contacts' };
    this.DETAILS_LINK = '/community/contacts/__dataId__';
  }
}

export default createPaginationContainer(
  withTranslation()(withRouter(DashBoardContactList)),
  {
    contacts: graphql`
      fragment DashBoardContactList_contacts on Query
        @argumentDefinitions(count: { type: "Int" }, cursor: { type: "String" }, orderBy: { type: ContactOrderBy }) {
        contacts(first: $count, after: $cursor, orderBy: $orderBy)
          @connection(key: "DashBoardContactList_contacts", filters: []) {
          edges {
            node {
              ...DashBoardContactRow_contact
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
  },
  {
    direction: 'forward',
    query: graphql`
      # Pagination query to be fetched upon calling 'loadMore'.
      # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
      query DashBoardContactListForwardQuery($count: Int!, $cursor: String, $orderBy: ContactOrderBy) {
        ...DashBoardContactList_contacts @arguments(count: $count, cursor: $cursor, orderBy: $orderBy)
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
