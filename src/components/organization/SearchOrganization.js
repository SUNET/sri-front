import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import CreateOrganization from './CreateOrganization';
import OrganizationDetailsContainer from '../../containers/organization/OrganizationDetails';
import OrganizationListContainer from '../../containers/organization/OrganizationList';

import { isEmpty } from '../../utils';

import CONFIG from '../../config';

const { ITEMS_PER_PAGE } = CONFIG;

class SearchOrganization extends _SearchEntityParentClass {
  LIST_CONTAINER = OrganizationListContainer;
  CREATE_COMPONENT = CreateOrganization;
  DETAIL_CONTAINER = OrganizationDetailsContainer;
  MODEL_NAME = 'organization';

  MODEL_LIST_NAME = ['organizations', 'organization_types'];

  PATH_ENTITY = '/community/organizations';
  PATH_ENTITY_ID = 'organizationId';
  DEFAULT_COLUMNS = [
    { name: 'Name', value: 'name', filter: 'order', textFilter: true },
    { name: 'Organization ID', value: 'organization_id', filter: 'order', textFilter: true },
    { name: 'Type', value: 'type', filter: 'order-filter', textFilter: true },
    { name: 'Affiliation', value: 'affiliation' },
    { name: 'Parent Organization ID', value: 'parent_organization_id' },
  ];

  LIST_QUERY = graphql`
    query SearchOrganizationAllQuery($count: Int!, $filter: OrganizationFilter, $orderBy: OrganizationOrderBy) {
      ...OrganizationList_organizations @arguments(count: $count, filter: $filter, orderBy: $orderBy)
      ...OrganizationList_organization_types
    }
  `;
}

export default withTranslation()(withRouter(SearchOrganization));
