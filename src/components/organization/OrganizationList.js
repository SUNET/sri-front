import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { default as ROW_COMPONENT } from './OrganizationRow';
import '../../style/ModelList.scss';

export class OrganizationList extends _BasicEntityListParentClass {
  MODEL_NAME = 'organization';
  MODEL_LIST_NAME = 'organizations';
  ROW_COMPONENT = ROW_COMPONENT;
  shouldComponentUpdate(nextProps, nextState) {
    const haveNewOrg = nextProps.organizations !== null;
    const haveNewOrgForDropdown = nextProps.organization_types !== null;
    return haveNewOrg && haveNewOrgForDropdown;
  }
}

export default createPaginationContainer(
  withTranslation()(withRouter(OrganizationList)),
  {
    organizations: graphql`
      fragment OrganizationList_organizations on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: OrganizationFilter }
          orderBy: { type: OrganizationOrderBy }
        ) {
        organizations(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "OrganizationList_organizations", filters: []) {
          edges {
            node {
              id
              ...OrganizationRow_organization
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `,
    organization_types: graphql`
      fragment OrganizationList_organization_types on Query {
        getChoicesForDropdown(name: "organization_types") {
          name
          value
        }
      }
    `,
  },
  {
    direction: 'forward',
    query: graphql`
      # Pagination query to be fetched upon calling 'loadMore'.
      # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
      query OrganizationListForwardQuery(
        $count: Int!
        $cursor: String
        $orderBy: OrganizationOrderBy
        $filter: OrganizationFilter
      ) {
        ...OrganizationList_organizations @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.organizations && props.organizations.organizations;
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
