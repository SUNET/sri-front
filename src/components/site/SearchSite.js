import _SearchEntityParentClass from '../common/_SearchEntityParentClass';

// React imports
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

// GraphQL imports
import graphql from 'babel-plugin-relay/macro';

// Components imports
import SiteList from '../../containers/site/SiteList';
import SiteDetailsContainer from '../../containers/site/SiteDetails';
import CreateSite from './CreateSiteRoute/CreateSiteRoute';
// Constants

class SearchSite extends _SearchEntityParentClass {
  LIST_CONTAINER = SiteList;
  CREATE_COMPONENT = CreateSite;
  DETAIL_CONTAINER = SiteDetailsContainer;

  MODEL_NAME = 'site';
  MODEL_LIST_NAME = 'sites';

  PATH_ENTITY = `/network/location-sites`;
  PATH_ENTITY_ID = 'siteId';
  DEFAULT_COLUMNS = [{ name: 'Name', value: 'name', filter: 'order', textFilter: true }];
  LIST_QUERY = graphql`
    query SearchSiteAllQuery($count: Int!, $filter: SiteFilter, $orderBy: SiteOrderBy) {
      ...SiteList_sites @arguments(count: $count, filter: $filter, orderBy: $orderBy)
    }
  `;
  constructor(props) {
    super(props);
    if (isMobile) {
      const visible = true;
      props.showHideColumn('name', visible, this.MODEL_NAME);
    }
  }
}

export default withTranslation()(withRouter(SearchSite));
